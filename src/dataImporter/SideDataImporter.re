include SharedTypes;

open Belt;

[@bs.module] external pluralize : unit => unit = "";

[@bs.val] [@bs.module "pluralize"] external singular : string => string = "";

let applyChanges = [%bs.raw
  {|
    function(oldRawArray, changes, maxCols) {
      const newRawArray = oldRawArray.slice();
      const maxNewRowCols = Math.min(maxCols, 4);
      for (const [row, col, oldVal, newVal] of changes) {
        if (newVal) {
          if (newRawArray[row] === undefined || newRawArray[row] === null) {
            newRawArray[row] = new Array(maxNewRowCols).fill("");
          }
          newRawArray[row][col] = newVal;
        }
      }
      /* make sure every undefined row is filled with empty strings */
      for (let i = 0; i < newRawArray.length; i++) {
        if (!newRawArray[i]) {
          newRawArray[i] = new Array(maxNewRowCols).fill("");
        } else {
          for (let j = 0; j < newRawArray[i].length; j++) {
            if (newRawArray[i][j] === null) {
              newRawArray[i][j] = "";
            }
          }
        }
      }
      return newRawArray;
     }
  |}
];

type sideDataImporterState = {
  prevRawData: ref(array(array(string))),
  prevSelectingName: ref(string),
  prevSelectedName: ref(string),
  prevRowFormat: ref(SharedTypes.rowFormat),
  prevIncludeSelectees: ref(bool),
  prevIgnoredRowIndices: ref(Belt.Set.t(int, IntCmp.identity))
};

let component = ReasonReact.reducerComponent("SideDataImporter");

let make =
    (
      ~rawData,
      ~selectingName,
      ~selectedName,
      ~rowFormat,
      ~updateRowFormat,
      ~updateRawData,
      ~includeSelectees,
      ~ignoredRowIndices,
      _children,
    ) => {

 
  {
    ...component,
      initialState: () => {
    prevRawData: ref(rawData),
    prevSelectingName: ref(selectingName),
    prevSelectedName: ref(selectedName),
    prevRowFormat: ref(rowFormat),
    prevIncludeSelectees: ref(includeSelectees),
    prevIgnoredRowIndices: ref(ignoredRowIndices),
  },
    reducer: (_action: unit, state) => ReasonReact.Update(state),
    shouldUpdate: ({oldSelf, newSelf}) => {
      let newRawData = oldSelf.state.prevRawData^ !== rawData;
      let newSelectingName = oldSelf.state.prevSelectingName^ !== selectingName;
      let newSelectedName = oldSelf.state.prevSelectedName^ !== selectedName;
      let newRowFormat = oldSelf.state.prevRowFormat^ !== rowFormat;
      let newIncludeSelectees = oldSelf.state.prevIncludeSelectees^ !== includeSelectees;
      let newIgnoredRowIndices = oldSelf.state.prevIgnoredRowIndices^ !== ignoredRowIndices;
      newSelf.state.prevRawData := rawData;
      newSelf.state.prevSelectingName := selectingName;
      newSelf.state.prevSelectedName := selectedName;
      newSelf.state.prevRowFormat := rowFormat;
      newSelf.state.prevIgnoredRowIndices := ignoredRowIndices;
      newSelf.state.prevIncludeSelectees := includeSelectees;
    
      (newRawData || newSelectedName || newSelectingName || newRowFormat || newIgnoredRowIndices || newIncludeSelectees);
    },
    render: (_) => {

  let maxCols =
    2 + (includeSelectees ? (rowFormat == SelectedInMultipleRows ? 2 : 10000) : 0);
  
  let minCols = 
      rawData
      |. Array.reduce(0, (p, c) => {
          let clength = Array.length(c);
          clength > p ? clength : p;
        });

  let selectedHeader = (index: int) =>
    if (rowFormat == SelectedInMultipleRows) {
      index == 0 ? selectedName : "Rank";
    } else {
      singular(selectedName) ++ " ranked #" ++ string_of_int(index + 1);
    };

  let columnHeader = index =>
    switch (index) {
    | 0 => String.capitalize(selectingName)
    | 1 => "Can match with<br /> how many " ++ selectedName
    | _ => String.capitalize(singular(selectedHeader(index - 2)))
    };

  let rowHeaders = index => (
   "<span class=\"" ++ (Set.has(ignoredRowIndices, index) ? "ignored-row" : "")
      ++ "\" title=\"" ++ (Set.has(ignoredRowIndices, index) ? "Row has errors and will be ignored" : "") ++ "\">" ++ string_of_int(index + 1) ++ "</span>"
  );

  let changeHandler = (changes, source) =>
    if (source !== "loadData") {
      let newRawData = 
        rawData
        |. applyChanges(changes, maxCols);
    
      updateRawData(newRawData);
    };   
    
      <div className="data-importer">
        <div className="question-statement">
          (
            ReasonReact.string(
              "Paste your " ++ selectingName ++ " into the spreadsheet below:",
            )
          )
        </div>
          <HotTable
            settings={
              "colHeaders": columnHeader,
              "rowHeaders": rowHeaders,
              "copyPaste": true,
              "width": "100%",
              "minSpareRows": 1,
              "startRows": 30,
              "minCols": rowFormat == SelectedInColumns ? minCols + 1 : minCols,
              "maxCols": maxCols,
              "startColumns": maxCols > 30 ? 30 : maxCols,
              "stretchH":
                Array.length(rawData) > 0
                &&
                Array.length(Js.Option.getWithDefault([||], rawData[0])) > 5 ?
                  "none" : "all",
              "data":
                Array.length(rawData) > 0 ?
                  Js.Nullable.return(rawData) : Js.Nullable.null,
              "onAfterChange": changeHandler,
            }
          />
        <div className="rowformat-selector">
          (
            includeSelectees ?
              <span>
                (ReasonReact.string("Format: "))
                <select
                  onChange=(
                    _event => {
                      let value = ReactDOMRe.domElementToObj(
                                    ReactEventRe.Form.target(_event),
                                  )##value;
                      let rowFormat =
                        switch (value) {
                        | "multiple-rows" => SelectedInMultipleRows
                        | "columns" => SelectedInColumns
                        | "" => SelectedInColumns
                        };
                      updateRowFormat(rowFormat);
                    }
                  )
      value=(rowFormat == SelectedInMultipleRows ? "multiple-rows" : "columns")
      >
                  <option value="multiple-rows">
                    (
                      ReasonReact.string(
                        "One " ++ singular(selectedName) ++ " per row",
                      )
                    )
                  </option>
                  <option value="columns">
                    (ReasonReact.string(selectedName ++ " in columns"))
                  </option>
                </select>
              </span> :
              ReasonReact.null
          )
          <button
            onClick=((_) => updateRawData([||]))
            className="mdc-button clear-button">
            (ReasonReact.string("Clear"))
          </button>
        </div>
      </div>;
    }
  };
};
