open Belt;

type runMCMFType =
  (int, array(array(int)), array(array(int)), int, int) =>
  {
    .
    "flow": int,
    "cost": int,
    "fnet": array(array(int)),
  };
type stringArrayDict = Js.Dict.t(array(string));
type intDict = Js.Dict.t(int);
type runPopularManyToMany =
  (stringArrayDict, stringArrayDict, intDict, intDict) => array(SharedTypes.pairing);

[@bs.module "./MCMF"] external runMinCostMaxFlow : runMCMFType = "default";

[@bs.module "./PopularManyToMany"]
external runPopularManyToMany : runPopularManyToMany = "default";

let rankSortedArray = selectedNames =>
  selectedNames
  |. List.toArray
  |> Js.Array.sortInPlaceWith(((_n1, r1), (_n2, r2)) => compare(r1, r2))
  |. Array.map(((sn, _)) => sn);

let popularManyToMany = (currentState: SharedTypes.state) => {
  let selectingSelected =
    currentState.selectingParsedData
    |. List.map(e => (e.name, rankSortedArray(e.selectedNames)))
    |. Js.Dict.fromList;
  let selectingCanMatchWith =
    currentState.selectingParsedData
    |. List.map(e => (e.name, e.canMatchWith))
    |. Js.Dict.fromList;
  let selectedSelected =
    currentState.selectedParsedData
    |. List.map(e => (e.name, rankSortedArray(e.selectedNames)))
    |. Js.Dict.fromList;
  let selectedCanMatchWith =
    currentState.selectedParsedData
    |. List.map(e => (e.name, e.canMatchWith))
    |. Js.Dict.fromList;

  let res = 
    runPopularManyToMany(selectingSelected, selectedSelected, selectingCanMatchWith, selectedCanMatchWith)
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
           |. Set.fromArray(~id=(module SharedTypes.OptIntCmp));
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

let suggestStrategy = (selectingParsedData: list(SharedTypes.sideDataEntry),
                       selectedParsedData: list(SharedTypes.sideDataEntry), mutualMatch: bool) => {
  let hasNoDuplicates = [%bs.raw {|function(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            return false;
          }
        }
       }
     return true;
   }|}];

  let isMonotonous = l => List.every(l, sns => 
                                sns
                                |. List.map(((_, r)) => r)
                                |. List.toArray
                                |. hasNoDuplicates);
    
  if(mutualMatch && 
    isMonotonous(List.map(selectingParsedData, s => s.selectedNames)) &&
    isMonotonous(List.map(selectedParsedData, s => s.selectedNames))) {
    SharedTypes.SelectingBreakTies;
  } else {
    SharedTypes.MCMF;
  }
};

let runMatch = (currentState: SharedTypes.state) => {
  /* First decide on Gale-Shapley vs MinCostMaxFlow. */
  switch(currentState.matchStrategy) {
    | SharedTypes.SelectingBreakTies => popularManyToMany(currentState);
    | SharedTypes.SelectedBreakTies => popularManyToMany(currentState);
    | SharedTypes.MCMF => minCostMaxFlow(currentState);
  }
};

