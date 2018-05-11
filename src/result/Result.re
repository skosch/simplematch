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
         <HotTable settings={{
            "colHeaders": columnHeader,
            "rowHeaders": true,
            "copyPaste": true,
            "width": "50%",
            "height": 300,
            "maxCols": 2,
            "stretchH": "all",
            "data": resultData
          }}
        />     
      </div>
    }
  }
}
