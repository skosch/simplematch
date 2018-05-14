// ES2015
import React from "react";
import HotTable from "react-handsontable";
import sizer from "react-sizer";

interface IAutosizeHotTableProps {
  height: number;
  settings: any;
}

class AutosizeHotTable extends React.Component<IAutosizeHotTableProps> {
  render() {
    const height = Math.min(500, window.innerHeight * 0.4);
    return (
      <div className="table-wrapper">
      <HotTable
        settings={{
          ...this.props.settings,
          height 
        }}/>
      </div>
    );
  }
}

export default sizer()(AutosizeHotTable);
