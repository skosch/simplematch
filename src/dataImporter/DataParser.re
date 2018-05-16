open Belt;

let ifEmptyString = (str, alt) =>
  switch (str) {
  | "" => alt
  | s => s
  };

let optString = optStr =>
  switch (String.trim(Js.Option.getWithDefault("", optStr))) {
  | "" => None
  | ss => Some(ss)
  };
let optStringToOptInt = optStr => 
switch(optStr) {
    | Some(n) => try (Some(int_of_string(n))) {
        | _ => None
      };
    | None => None;
  };

let parseSelectees = (cols, rowFormat) => {
  switch(rowFormat) {
    | SharedTypes.SelectedInColumns => {
        /* Remove empty columns */
        cols
        |> Js.Array.filter(s => String.trim(s) != "")
        |. Array.mapWithIndex((i, sn) => (i, sn))
        |> Array.reduce(_, [], (p, (i, sn)) => [(sn, i + 1), ...p])
        |. List.reverse
        |. Js.Option.some
      };
    | SelectedInMultipleRows => {
        switch (optString(cols[0]), optStringToOptInt(cols[1])) {
        | (Some(sn), Some(rank)) => Some([(sn, rank)]);
        | _ => None;
        };
      }
  };
};

let parseSingleRow = (cols, hasSelectees, rowFormat) => {
  let name = optString(cols[0]);
  let canMatchWith = optStringToOptInt(optString(cols[1]));
  let selectees =
      hasSelectees ?
      parseSelectees(Js.Array.sliceFrom(2, cols), rowFormat) : Some([]);
  
  switch ((name, canMatchWith, selectees)) {
  | (Some(n), Some(cmw), Some(selectees)) =>
    Some((n, cmw, selectees));
  | _ => None
  };
};

let parseData =
    (rawData, rowFormat: SharedTypes.rowFormat, hasSelectees: bool) => {
  /* Depending on the current state, create side data entry list.
   * Raw data format is always: [name, canMatchWith, selected] (and selected is [selectedName, rank] or [selectedName1, ...])
   */
  let sideDataEntries =
    switch (rowFormat) {
    | SelectedInColumns =>
      Array.reduce(
        rawData,
        [],
        (allRows, cols) => {
          let rowContent = parseSingleRow(cols, hasSelectees, rowFormat);
          switch (rowContent) {
          | Some((name, canMatchWith, selectees)) =>
            let selectedNames =
              Array.slice(cols, ~offset=2, ~len=Array.length(cols));
            let entry: SharedTypes.sideDataEntry = {
              name,
              canMatchWith,
              selectedNames: selectees,
            };
            [entry, ...allRows];
          | None => allRows
          };
        },
      )
      |. List.reverse
    | SelectedInMultipleRows =>
      Array.reduce(
        rawData,
        HashMap.String.make(Array.length(rawData)),
        (nameMap, cols) => {
          let rowContent = parseSingleRow(cols, hasSelectees, rowFormat);
          switch (rowContent) {
          | Some((name, canMatchWith, selectees)) =>
            let firstAndOnlySelectee = List.head(selectees);
            let previouslyFoundSelectedNames =
              switch (HashMap.String.get(nameMap, name)) {
              | Some((entry: SharedTypes.sideDataEntry)) =>
                entry.selectedNames
              | None => []
              };
            Js.log(firstAndOnlySelectee);
            let entry: SharedTypes.sideDataEntry = {
              name,
              canMatchWith,
              selectedNames:
                switch (firstAndOnlySelectee) {
                | Some((selectedName, rank)) => [
                    (selectedName, rank),
                    ...previouslyFoundSelectedNames,
                  ]
                | None => previouslyFoundSelectedNames
                },
            };
            HashMap.String.set(nameMap, name, entry);
            nameMap;
          | None => nameMap
          };
        },
      )
      |> HashMap.String.valuesToArray
      |> List.fromArray
    };
  let selectedNamesEntries =
    sideDataEntries
    |. List.reduce([], (selectedNameList, entry) =>
         List.concat(selectedNameList, entry.selectedNames)
       )
    |. List.map(((sn, _rank)) => (sn, true))
    |> List.toArray
    |. HashMap.String.fromArray
    |. HashMap.String.keysToArray
    |. List.fromArray
    |. List.map(name => {
         let entry: SharedTypes.sideDataEntry = {
           name,
           canMatchWith: 1,
           selectedNames: [],
         };
         entry;
       });
  (sideDataEntries, selectedNamesEntries);
};
