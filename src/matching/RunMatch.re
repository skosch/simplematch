open Belt;

type runMCMFType =
  (int, array(array(int)), array(array(int)), int, int) =>
  {
    .
    "flow": int,
    "cost": int,
    "fnet": array(array(int)),
  };

type gsInputLine = (string, array(string));

type runGaleShapleyType =
  (array(gsInputLine), array(gsInputLine)) => array(SharedTypes.pairing);

[@bs.module "./MCMF"] external runMinCostMaxFlow : runMCMFType = "default";

[@bs.module "./GaleShapley"]
external runGaleShapley : runGaleShapleyType = "default";

module IntCmp =
  Id.MakeComparable(
    {
      type t = option(int);
      let cmp = (i1, i2) => compare(i1, i2);
    },
  );

let rankSortedArray = selectedNames =>
  selectedNames
  |. List.toArray
  |> Js.Array.sortInPlaceWith(((_n1, r1), (_n2, r2)) => compare(r1, r2))
  |. Array.map(((n, r)) => n);

let galeShapley = (currentState: SharedTypes.state) => {
  let selectingTuples =
    currentState.selectingParsedData
    |. List.map(e => (e.name, rankSortedArray(e.selectedNames)))
    |. List.toArray;
  let selectedTuples =
    currentState.selectedParsedData
    |. List.map(e => (e.name, rankSortedArray(e.selectedNames)))
    |. List.toArray;
  Js.log(selectingTuples);
  Js.log(selectedTuples);
  let res = 
    runGaleShapley(selectingTuples, selectedTuples)
    |. List.fromArray;

  res;
};

let minCostMaxFlow = (currentState: SharedTypes.state) => {
  /* now do min cost max flow */
  let selectingParsedData = currentState.selectingParsedData;
  let selectedParsedData = currentState.selectedParsedData;
  let selectedIndices =
    selectedParsedData
    |. List.mapWithIndex((i, s) => (s.name, i))
    |> List.toArray
    |> HashMap.String.fromArray;
  let nSelecting = List.length(selectingParsedData);
  let nSelected = List.length(selectedParsedData);
  /* First row of the capacities matrix: from source to selecting side */
  let selectingCapacitiesRow =
    Array.concatMany([|
      [|0|],
      selectingParsedData |. List.map(e => e.canMatchWith) |> List.toArray,
      Array.makeBy(nSelected, _i => 0),
      [|0|],
    |]);
  let connectingCapacitiesRows =
    selectingParsedData
    |. List.map(s => {
         let selectedIndicesSet =
           s.selectedNames
           |. List.map(((sn, _)) =>
                HashMap.String.get(selectedIndices, sn)
              )
           |> List.toArray
           |. Set.fromArray(~id=(module IntCmp));
         Array.concatMany([|
           [|0|],
           Array.makeBy(nSelecting, _i => 0),
           Array.makeBy(nSelected, i =>
             Set.has(selectedIndicesSet, Some(i)) ? 1 : 0
           ),
           [|0|],
         |]);
       })
    |> List.toArray;
  let selectedCapacitiesRows =
    selectedParsedData
    |. List.map(s =>
         Array.concatMany([|
           [|0|],
           Array.makeBy(nSelecting + nSelected, _i => 0),
           [|s.canMatchWith|],
         |])
       )
    |> List.toArray;
  let capacities =
    Array.concatMany([|
      [|selectingCapacitiesRow|],
      connectingCapacitiesRows,
      selectedCapacitiesRows,
      [|Array.makeBy(nSelecting + nSelected + 2, _i => 0)|],
    |]);
  let selectingCostsRow =
    Array.concatMany([|
      [|0|],
      Array.makeBy(nSelecting + nSelected, _i => 0),
      [|0|],
    |]);
  let connectingCostsRows =
    selectingParsedData
    |. List.map(s => {
         let selectedIndicesRankMap =
           s.selectedNames
           |. List.map(((sn, rank)) =>
                (
                  Js.Option.getWithDefault(
                    -1,
                    HashMap.String.get(selectedIndices, sn),
                  ),
                  rank,
                )
              )
           |> List.toArray
           |. HashMap.Int.fromArray;
         Array.concatMany([|
           [|0|],
           Array.makeBy(nSelecting, _i => 0),
           Array.makeBy(nSelected, i =>
             Js.Option.getWithDefault(
               0,
               HashMap.Int.get(selectedIndicesRankMap, i),
             )
           ),
           [|0|],
         |]);
       })
    |> List.toArray;
  let selectedCostsRows =
    selectedParsedData
    |. List.map(_s =>
         Array.concatMany([|
           [|0|],
           Array.makeBy(nSelecting + nSelected, _i => 0),
           [|0|],
         |])
       )
    |> List.toArray;
  let costs =
    Array.concatMany([|
      [|selectingCostsRow|],
      connectingCostsRows,
      selectedCostsRows,
      [|Array.makeBy(nSelecting + nSelected + 2, _i => 0)|],
    |]);
  /* selecting vertices, and selected vertices
     /  runMinCostMaxFlow() */
  let nNodes = nSelecting + nSelected + 2;
  let resultFlowNet = runMinCostMaxFlow(
                        nNodes,
                        capacities,
                        costs,
                        0,
                        nNodes - 1,
                      )##fnet;
  /* TODO: create error entries */
  let errorEntry: SharedTypes.sideDataEntry = {
    name: "?",
    canMatchWith: 0,
    selectedNames: [],
  };
  let pairings =
    resultFlowNet
    |. Array.slice(~offset=1, ~len=nSelecting)
    |. Array.mapWithIndex((selectingIndex, row) => (selectingIndex, row))
    |. Array.reduce(
         [],
         (pairingsList, (selectingIndex, row)) => {
           let selectingName =
             Js.Option.getWithDefault(
               errorEntry,
               List.get(selectingParsedData, selectingIndex),
             ).
               name;
           let pairingsInThisRow =
             row
             |. Array.slice(~offset=1 + nSelecting, ~len=nSelected)
             |. Array.mapWithIndex((selectedIndex, column) =>
                  (selectedIndex, column)
                )
             |. Array.reduce(
                  [], (pairingsListInThisRow, (selectedIndex, column)) =>
                  if (column >= 1) {
                    let selectedName =
                      Js.Option.getWithDefault(
                        errorEntry,
                        List.get(selectedParsedData, selectedIndex),
                      ).
                        name;
                    [
                      (selectingName, selectedName),
                      ...pairingsListInThisRow,
                    ];
                  } else {
                    pairingsListInThisRow;
                  }
                );
           pairingsInThisRow @ pairingsList;
         },
       );
  pairings;
};

let runMatch = (currentState: SharedTypes.state) => {
  /* First decide on Gale-Shapley vs MinCostMaxFlow. */
  let mutualRankedMatch = currentState.mutualMatch;
  /* TODO: also, all ranked selectedNames must be different on both sides, and decide between 1-level gale shapley
     if canMatchWith = 1 everywhere, or 2-level if not (see https://arxiv.org/pdf/1609.07531.pdf) */
  if (mutualRankedMatch) {
    galeShapley(currentState);
  } else {
    minCostMaxFlow(currentState);
  };
};
