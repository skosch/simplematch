include SharedTypes;

open Belt;

type stats = {
  selectorsMatched: int,
  selecteesMatched: int,
};

let component = ReasonReact.statelessComponent("Result");

let make = (~currentState, ~resultData, _children) => {
  let statistics = (): stats => {
    let matchedNames =
      resultData
      |. Array.reduce(HashMap.String.make(Array.length(resultData) * 2), (p, c) => {
          HashMap.String.set(p, Js.Option.getWithDefault("", Array.get(c, 0)), true);
          HashMap.String.set(p, Js.Option.getWithDefault("", Array.get(c, 1)), true);
          p;
        });
    let selectorsMatched =
      currentState.selectingParsedData
      |. List.reduce(0, (p, c) => {
          p + (HashMap.String.has(matchedNames, c.name) ? 1 : 0);
        });
    let selecteesMatched =
      currentState.selectedParsedData
      |. List.reduce(0, (p, c) => {
          p + (HashMap.String.has(matchedNames, c.name) ? 1 : 0);
        });
    {selectorsMatched, selecteesMatched};
  };

  let columnHeader = index =>
    switch (index) {
    | 0 => currentState.selectingName
    | 1 => currentState.selectedName
    };
  {
    ...component,
    render: (_) => {
    let {selecteesMatched, selectorsMatched} = statistics();
      <div className="result">
        <div className="result-table">
          <HotTable
            settings={
              "colHeaders": columnHeader,
              "rowHeaders": true,
              "copyPaste": true,
              "width": "50%",
              "maxCols": 2,
              "stretchH": "all",
              "data": resultData,
            }
          />
        </div>
        <div className="result-details">
          <div className="counts">
          <div className="pairings">
            <div className="top-label">(ReasonReact.string("Pairings"))</div>
            (ReasonReact.string(string_of_int(Array.length(resultData))))
          </div>
          <div className="matched-counts">
          <div className="selectors-matched">
            <div className="top-label">(ReasonReact.string(String.capitalize(currentState.selectingName)))</div>
            (ReasonReact.string(string_of_int(selectorsMatched)))
            <span className="label">(ReasonReact.string("matched,"))</span>
            (ReasonReact.string(string_of_int(List.length(currentState.selectingParsedData) - selectorsMatched)))
            <span className="label">(ReasonReact.string("unmatched"))</span>
          </div>
          <div className="selectors-matched">
            <div className="top-label">(ReasonReact.string(String.capitalize(currentState.selectedName)))</div>
            (ReasonReact.string(string_of_int(selecteesMatched)))
            <span className="label">(ReasonReact.string("matched,"))</span>
            (ReasonReact.string(string_of_int(List.length(currentState.selectedParsedData) - selecteesMatched)))
            <span className="label">(ReasonReact.string("unmatched"))</span>
          </div>
          </div>
          </div>
        </div>
      </div>
      },
  };
};
