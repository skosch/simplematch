include SharedTypes;
open Belt;

let component = ReasonReact.statelessComponent("Result");

let make = (~currentState, ~resultData, _children) => {
  let columnHeader = (index) => {
    switch(index) {
      | 0 => currentState.selectingName;
      | 1 => currentState.selectedName;
    };
  };
    
  {
    ...component,
    render: (_) => {
      <div className="result">
         <div className="result-table">
            <HotTable settings={{
                "colHeaders": columnHeader,
                "rowHeaders": true,
                "copyPaste": true,
                "width": "50%",
                "maxCols": 2,
                "stretchH": "all",
                "data": resultData
              }}
            />     
        </div>
        <div className="result-details">
          (ReasonReact.string(string_of_int(Array.length(resultData)) ++ " pairings"))
        </div>
      </div>
    }
  }
}
