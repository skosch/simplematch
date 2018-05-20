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

let popularManyToMany = (currentState: SharedTypes.state, swapParties: bool) => {
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

  if (swapParties) {
    runPopularManyToMany(selectedSelected, selectingSelected, selectedCanMatchWith, selectingCanMatchWith)
    |. List.fromArray
    |. List.map(((a, b, c, d)) => (b, a, d, c));
  } else {
    runPopularManyToMany(selectingSelected, selectedSelected, selectingCanMatchWith, selectedCanMatchWith)
    |. List.fromArray;
  }
};

let minCostMaxFlow = (currentState: SharedTypes.state) => {
  /* now do min cost max flow */
  let selectingParsedData = currentState.selectingParsedData;
  let selectedParsedData = currentState.selectedParsedData;
  let selectingIndices =
    selectingParsedData
    |. List.mapWithIndex((i, s) => (s.name, i))
    |> List.toArray
    |> HashMap.String.fromArray;
  let selectedIndices =
    selectedParsedData
    |. List.mapWithIndex((i, s) => (s.name, i))
    |> List.toArray
    |> HashMap.String.fromArray;
  
    let reverseConnectedIndicesSets =
    currentState.mutualMatch ?
    selectedParsedData
        |. List.toArray
        |. Array.map(s => 
            s.selectedNames
            |. List.map(((sn, _)) => sn)
            |> List.toArray /* an array of selected indices */
            |. Set.fromArray(~id=(module SharedTypes.StrCmp))
        )
    : [||];
  
  let selectedIndicesRankMapForSelectingList =
    List.map(selectingParsedData, s =>
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
             |. HashMap.Int.fromArray /* {indexOfSelected: rank, ...} */
  ); 

  let selectedIndicesRankMapForSelectingArray =
  List.toArray(selectedIndicesRankMapForSelectingList);
  
  let selectingIndicesRankMapForSelectedList =
    List.map(selectedParsedData, s =>
             s.selectedNames
             |. List.map(((sn, rank)) =>
                         (
               Js.Option.getWithDefault(
                           -1,
                           HashMap.String.get(selectingIndices, sn),
                         ),
               rank,
             )
               )
             |> List.toArray
             |. HashMap.Int.fromArray /* {indexOfSelecting: rank, ...} */
  ); 
  let selectingIndicesRankMapForSelectedArray = 
    List.toArray(selectingIndicesRankMapForSelectedList);
  
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
        /* the indices selected by s */
        /* if mutual: we need to find the indices that selected s back. */
         let connectedIndicesSet =
           s.selectedNames
           |. List.map(((sn, _)) =>
                HashMap.String.get(selectedIndices, sn)
              )
           |> List.toArray /* an array of selected indices */
           |. Set.fromArray(~id=(module SharedTypes.OptIntCmp));
           
         Array.concatMany([|
           [|0|],
           Array.makeBy(nSelecting, _i => 0),
           Array.makeBy(nSelected, i => {
             let isForwardConnected = Set.has(connectedIndicesSet, Some(i));
             let isReverseConnected = currentState.mutualMatch ? (switch(reverseConnectedIndicesSets[i]) {
               | Some(reverseSet) => Set.has(reverseSet, s.name);
               | None => false;
             }) : true;
             isForwardConnected && isReverseConnected ? 1 : 0;
           }),
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
    |. List.zip(selectedIndicesRankMapForSelectingList)
    |. List.mapWithIndex((i, e) => (i, e))
    |. List.map(((selectingIndex, (s, selectedIndicesRankMap))) => {
         /* TODO: Take both costs into account */
         Array.concatMany([|
           [|0|],
           Array.makeBy(nSelecting, _i => 0),
           Array.makeBy(nSelected, selectedIndex => {
           let forwardCost = 
            Js.Option.getWithDefault(0,  
               HashMap.Int.get(selectedIndicesRankMap, selectedIndex));
           let reverseCost = 
             switch(selectingIndicesRankMapForSelectedArray[selectedIndex]) {
               | Some(hm) => Js.Option.getWithDefault(0, HashMap.Int.get(hm, selectingIndex));
               | None => 0;
             };

             forwardCost + reverseCost;
         }
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
                      ).name;

  
               let selectingRank = Js.Option.getWithDefault(0, 
                 HashMap.Int.get(Js.Option.getWithDefault(HashMap.Int.make(0),
                 selectedIndicesRankMapForSelectingArray[selectingIndex]), selectedIndex));
               let selectedRank = Js.Option.getWithDefault(0,
                 HashMap.Int.get(Js.Option.getWithDefault(HashMap.Int.make(0),
                  selectingIndicesRankMapForSelectedArray[selectedIndex]), selectingIndex));

                    [
                      (selectingName, selectedName, selectingRank, selectedRank),
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
    | SharedTypes.SelectingBreakTies => popularManyToMany(currentState, false);
    | SharedTypes.SelectedBreakTies => popularManyToMany(currentState, true);
    | SharedTypes.MCMF => minCostMaxFlow(currentState);
  }
};

