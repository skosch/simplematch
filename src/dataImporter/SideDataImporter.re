include SharedTypes;

open Belt;

[@bs.module] external pluralize : unit => unit = "";

[@bs.val] [@bs.module "pluralize"] external singular : string => string = "";

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
  {
    ...component,
    render: (_) =>
      <div className="data-importer">
        <div className="question-statement">
          (
            ReasonReact.string(
              "Paste your "
              ++ selectingName
              ++ " into the spreadsheet below:",
            )
          )
        </div>
        <div className="table-wrapper">
        <HotTable
          settings={
            "colHeaders": columnHeader,
            "rowHeaders": true,
            "copyPaste": true,
            "width": "100%",
            "minSpareRows": 1,
            "startRows": 10,
            "maxCols": maxCols,
            "startColumns": maxCols > 30 ? 30 : maxCols,
            "stretchH":
              Array.length(rawData) > 0
              && Array.length(Js.Option.getWithDefault([||], rawData[0])) > 5 ?
                "none" : "all",
            "data":
              Array.length(rawData) > 0 ?
                Js.Nullable.return(rawData) : Js.Nullable.null,
          }
        />
  </div>
        (includeSelectees ? (
            <div className="rowformat-selector">
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
            </div>
            ) : ReasonReact.null)
      </div>,
  };
};
