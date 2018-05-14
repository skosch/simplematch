open Belt;

let ifEmptyString = (str, alt) => 
  switch(str) {
    | "" => alt;
    | s => s;
  };

let parseData = (rawData, rowFormat: SharedTypes.rowFormat) => {
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
          let name = Js.Option.getWithDefault("", cols[0]);
          if (name != "" && Array.length(cols) >= 2) {
            let canMatchWith = ifEmptyString(Js.Option.getWithDefault("1", cols[1]), "1");
            let selectedNames =
              Array.slice(cols, ~offset=2, ~len=Array.length(cols));
            let entry: SharedTypes.sideDataEntry = {
              name: String.trim(name),
              canMatchWith: int_of_string(canMatchWith),
              selectedNames:
                selectedNames
                |> List.fromArray
                |. List.mapWithIndex((i, sn) => (i, sn))
                |> List.reduce(_, [], (p, (i, sn)) => [(sn, i + 1), ...p])
                |. List.reverse,
            };
            [entry, ...allRows];
          } else {
            allRows;
          };
        },
      )
      |. List.reverse
    | SelectedInMultipleRows =>
      Array.reduce(
        rawData,
        HashMap.String.make(Array.length(rawData)),
        (nameMap, cols) => {
          let name = Js.Option.getWithDefault("", cols[0]);
          if (name != "" && Array.length(cols) >= 2) {
            let canMatchWith = ifEmptyString(Js.Option.getWithDefault("1", cols[1]), "1");
            let selectedName = Js.Option.getWithDefault("", cols[2]);
            let rank = ifEmptyString(Js.Option.getWithDefault("1", cols[3]), "1");
            let previouslyFoundSelectedNames =
              switch (HashMap.String.get(nameMap, name)) {
              | Some((entry: SharedTypes.sideDataEntry)) => 
                entry.selectedNames;
              | None => [];
              };
            let entry: SharedTypes.sideDataEntry = {
              name: String.trim(name),
              canMatchWith: int_of_string(canMatchWith),
              selectedNames:
                if (selectedName !== "") {
                  [
                    (selectedName, int_of_string(rank)),
                    ...previouslyFoundSelectedNames,
                  ];
                } else {
                  previouslyFoundSelectedNames;
                },
            };
            HashMap.String.set(nameMap, name, entry);
            nameMap;
          } else {
            nameMap;
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
