open Belt;

type pairing = (string, string, int, int) /* selector, selectee, selectorRank, selecteeRank */;

module IntCmp =
  Id.MakeComparable(
    {
      type t = int;
      let cmp = (i1, i2) => compare(i1, i2);
    },
  );
module StrCmp =
  Id.MakeComparable(
    {
      type t = string;
      let cmp = (i1, i2) => compare(i1, i2);
    },
  );

module PairingCmp =
  Id.MakeComparable(
    {
      type t = pairing;
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

type matchStrategy =
  | SelectingBreakTies
  | SelectedBreakTies
  | MCMF;

type selectedNameWithRank = (string, int);

type sideDataEntry = {
  name: string,
  canMatchWith: int,
  selectedNames: list(selectedNameWithRank),
};


type state = {
  selectingName: string,
  selectedName: string,

  sampleMenuOpen: bool,
  mutualMatch: bool,
  matchStrategy: matchStrategy,

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
