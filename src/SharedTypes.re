open Belt;

module IntCmp =
  Id.MakeComparable(
    {
      type t = int;
      let cmp = (i1, i2) => compare(i1, i2);
    },
  );
module OptIntCmp =
  Id.MakeComparable(
    {
      type t = option(int);
      let cmp = (i1, i2) => compare(i1, i2);
    },
  );

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

  sampleMenuOpen: bool,
  mutualMatch: bool,

  selectingRowFormat: rowFormat,
  selectedRowFormat: rowFormat,

  selectingRawData: array(array(string)),
  selectedRawData: array(array(string)),

  selectingParsedData: list(sideDataEntry),
  selectedParsedData: list(sideDataEntry),
  
  selectingIgnoredRowIndices: Set.t(int, IntCmp.identity),
  selectedIgnoredRowIndices: Set.t(int, IntCmp.identity),
  
  matchResult: list(pairing),
};
