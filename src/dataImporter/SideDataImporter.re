include SharedTypes;

open Belt;

[@bs.module] external pluralize : unit => unit = "";

[@bs.val] [@bs.module "pluralize"] external singular : string => string = "";

let applyChanges = [%bs.raw
  {|
    function(oldRawArray, changes) {
      const newRawArray = oldRawArray.slice();
      for (const [row, col, oldVal, newVal] of changes) {
        if (newVal) {
          if (newRawArray[row] === undefined) {
            newRawArray[row] = [];
          }
          newRawArray[row][col] = newVal;
        }
      }
      return newRawArray.filter(a => a[0] !== null && a[1] !== null);
     }
  |}
];

let component = ReasonReact.statelessComponent("SideDataImporter");

let make =
    (
      ~rawData,
      ~selectingName,
      ~selectedName,
      ~rowFormat,
      ~updateRowFormat,
      ~updateRawData,
      ~includeSelectees,
      _children,
    ) => {
  let maxCols =
    2
    + (includeSelectees ? rowFormat == SelectedInMultipleRows ? 2 : 10000 : 0);
  let selectedHeader = (index: int) =>
    if (rowFormat == SelectedInMultipleRows) {
      index == 0 ? selectedName : "Rank";
    } else {
      singular(selectedName) ++ " ranked #" ++ string_of_int(index + 1);
    };
  let columnHeader = index =>
    switch (index) {
    | 0 => String.capitalize(selectingName)
    | 1 => "Can match<br />with " ++ selectedName
    | _ => String.capitalize(singular(selectedHeader(index - 2)))
    };
  let changeHandler = (changes, source) =>
    if (source !== "loadData") {
      let newRawData = 
        rawData
        |. applyChanges(changes);

      updateRawData(newRawData);
    };
  {
    ...component,
    render: (_) =>
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
              "rowHeaders": true,
              "copyPaste": true,
              "width": "100%",
              "minSpareRows": 1,
              "startRows": 30,
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
                  )>
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
      </div>,
  };
};
