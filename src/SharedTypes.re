type rowFormat =
  | SelectedInColumns
  | SelectedInMultipleRows;

type selectedNameWithRank = (string, int);

type sideDataEntry = {
  name: string,
  canMatchWith: int,
  selectedNames: list(selectedNameWithRank),
};

type pairing = (string, string);

type state = {
  selectingName: string,
  selectedName: string,

  mutualMatch: bool,

  selectingRowFormat: rowFormat,
  selectedRowFormat: rowFormat,

  selectingRawData: array(array(string)),
  selectedRawData: array(array(string)),

  selectingParsedData: list(sideDataEntry),
  selectedParsedData: list(sideDataEntry),
  
  matchResult: list(pairing),
};
