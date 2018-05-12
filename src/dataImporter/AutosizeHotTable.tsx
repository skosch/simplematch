// ES2015
import React from 'react';
import HotTable from 'react-handsontable';
import sizer from 'react-sizer';

interface IAutosizeHotTableProps {
  height: number;
  settings: any;
}

class AutosizeHotTable extends React.Component<IAutosizeHotTableProps> {
  render() {
    return (
      <HotTable settings={{
        ...this.props.settings,
        height: this.props.height,
      }} />
    );
  }
}

export default sizer()(AutosizeHotTable);
