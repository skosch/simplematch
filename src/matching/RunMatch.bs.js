'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var MCMF = require("./MCMF");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var SharedTypes = require("../SharedTypes.bs.js");
var Belt_HashMapInt = require("bs-platform/lib/js/belt_HashMapInt.js");
var Belt_HashMapString = require("bs-platform/lib/js/belt_HashMapString.js");
var PopularManyToMany = require("./PopularManyToMany");

function rankSortedArray(selectedNames) {
  return Belt_Array.map(Belt_List.toArray(selectedNames).sort((function (param, param$1) {
                    return Caml_obj.caml_compare(param[1], param$1[1]);
                  })), (function (param) {
                return param[0];
              }));
}

function popularManyToMany(currentState, swapParties) {
  var selectingSelected = Js_dict.fromList(Belt_List.map(currentState[/* selectingParsedData */10], (function (e) {
              return /* tuple */[
                      e[/* name */0],
                      rankSortedArray(e[/* selectedNames */2])
                    ];
            })));
  var selectingCanMatchWith = Js_dict.fromList(Belt_List.map(currentState[/* selectingParsedData */10], (function (e) {
              return /* tuple */[
                      e[/* name */0],
                      e[/* canMatchWith */1]
                    ];
            })));
  var selectedSelected = Js_dict.fromList(Belt_List.map(currentState[/* selectedParsedData */11], (function (e) {
              return /* tuple */[
                      e[/* name */0],
                      rankSortedArray(e[/* selectedNames */2])
                    ];
            })));
  var selectedCanMatchWith = Js_dict.fromList(Belt_List.map(currentState[/* selectedParsedData */11], (function (e) {
              return /* tuple */[
                      e[/* name */0],
                      e[/* canMatchWith */1]
                    ];
            })));
  if (swapParties) {
    return Belt_List.map(Belt_List.fromArray(Curry._4(PopularManyToMany.default, selectedSelected, selectingSelected, selectedCanMatchWith, selectingCanMatchWith)), (function (param) {
                  return /* tuple */[
                          param[1],
                          param[0],
                          param[3],
                          param[2]
                        ];
                }));
  } else {
    return Belt_List.fromArray(Curry._4(PopularManyToMany.default, selectingSelected, selectedSelected, selectingCanMatchWith, selectedCanMatchWith));
  }
}

function minCostMaxFlow(currentState) {
  var selectingParsedData = currentState[/* selectingParsedData */10];
  var selectedParsedData = currentState[/* selectedParsedData */11];
  var selectingIndices = Belt_HashMapString.fromArray(Belt_List.toArray(Belt_List.mapWithIndex(selectingParsedData, (function (i, s) {
                  return /* tuple */[
                          s[/* name */0],
                          i
                        ];
                }))));
  var selectedIndices = Belt_HashMapString.fromArray(Belt_List.toArray(Belt_List.mapWithIndex(selectedParsedData, (function (i, s) {
                  return /* tuple */[
                          s[/* name */0],
                          i
                        ];
                }))));
  var match = currentState[/* mutualMatch */4];
  var reverseConnectedIndicesSets = match ? Belt_Array.map(Belt_List.toArray(selectedParsedData), (function (s) {
            return Belt_Set.fromArray(Belt_List.toArray(Belt_List.map(s[/* selectedNames */2], (function (param) {
                                  return param[0];
                                }))), SharedTypes.StrCmp);
          })) : /* array */[];
  var selectedIndicesRankMapForSelectingList = Belt_List.map(selectingParsedData, (function (s) {
          return Belt_HashMapInt.fromArray(Belt_List.toArray(Belt_List.map(s[/* selectedNames */2], (function (param) {
                                return /* tuple */[
                                        Js_option.getWithDefault(-1, Belt_HashMapString.get(selectedIndices, param[0])),
                                        param[1]
                                      ];
                              }))));
        }));
  var selectedIndicesRankMapForSelectingArray = Belt_List.toArray(selectedIndicesRankMapForSelectingList);
  var selectingIndicesRankMapForSelectedList = Belt_List.map(selectedParsedData, (function (s) {
          return Belt_HashMapInt.fromArray(Belt_List.toArray(Belt_List.map(s[/* selectedNames */2], (function (param) {
                                return /* tuple */[
                                        Js_option.getWithDefault(-1, Belt_HashMapString.get(selectingIndices, param[0])),
                                        param[1]
                                      ];
                              }))));
        }));
  var selectingIndicesRankMapForSelectedArray = Belt_List.toArray(selectingIndicesRankMapForSelectedList);
  var nSelecting = Belt_List.length(selectingParsedData);
  var nSelected = Belt_List.length(selectedParsedData);
  var selectingCapacitiesRow = Belt_Array.concatMany(/* array */[
        /* array */[0],
        Belt_List.toArray(Belt_List.map(selectingParsedData, (function (e) {
                    return e[/* canMatchWith */1];
                  }))),
        Belt_Array.makeBy(nSelected, (function () {
                return 0;
              })),
        /* array */[0]
      ]);
  var connectingCapacitiesRows = Belt_List.toArray(Belt_List.map(selectingParsedData, (function (s) {
              var connectedIndicesSet = Belt_Set.fromArray(Belt_List.toArray(Belt_List.map(s[/* selectedNames */2], (function (param) {
                              return Belt_HashMapString.get(selectedIndices, param[0]);
                            }))), SharedTypes.OptIntCmp);
              return Belt_Array.concatMany(/* array */[
                          /* array */[0],
                          Belt_Array.makeBy(nSelecting, (function () {
                                  return 0;
                                })),
                          Belt_Array.makeBy(nSelected, (function (i) {
                                  var isForwardConnected = Belt_Set.has(connectedIndicesSet, /* Some */[i]);
                                  var match = currentState[/* mutualMatch */4];
                                  var isReverseConnected;
                                  if (match) {
                                    var match$1 = Belt_Array.get(reverseConnectedIndicesSets, i);
                                    isReverseConnected = match$1 ? Belt_Set.has(match$1[0], s[/* name */0]) : false;
                                  } else {
                                    isReverseConnected = true;
                                  }
                                  var match$2 = isForwardConnected && isReverseConnected;
                                  if (match$2) {
                                    return 1;
                                  } else {
                                    return 0;
                                  }
                                })),
                          /* array */[0]
                        ]);
            })));
  var selectedCapacitiesRows = Belt_List.toArray(Belt_List.map(selectedParsedData, (function (s) {
              return Belt_Array.concatMany(/* array */[
                          /* array */[0],
                          Belt_Array.makeBy(nSelecting + nSelected | 0, (function () {
                                  return 0;
                                })),
                          /* array */[s[/* canMatchWith */1]]
                        ]);
            })));
  var capacities = Belt_Array.concatMany(/* array */[
        /* array */[selectingCapacitiesRow],
        connectingCapacitiesRows,
        selectedCapacitiesRows,
        /* array */[Belt_Array.makeBy((nSelecting + nSelected | 0) + 2 | 0, (function () {
                  return 0;
                }))]
      ]);
  var selectingCostsRow = Belt_Array.concatMany(/* array */[
        /* array */[0],
        Belt_Array.makeBy(nSelecting + nSelected | 0, (function () {
                return 0;
              })),
        /* array */[0]
      ]);
  var connectingCostsRows = Belt_List.toArray(Belt_List.map(Belt_List.mapWithIndex(Belt_List.zip(selectingParsedData, selectedIndicesRankMapForSelectingList), (function (i, e) {
                  return /* tuple */[
                          i,
                          e
                        ];
                })), (function (param) {
              var selectedIndicesRankMap = param[1][1];
              var selectingIndex = param[0];
              return Belt_Array.concatMany(/* array */[
                          /* array */[0],
                          Belt_Array.makeBy(nSelecting, (function () {
                                  return 0;
                                })),
                          Belt_Array.makeBy(nSelected, (function (selectedIndex) {
                                  var forwardCost = Js_option.getWithDefault(0, Belt_HashMapInt.get(selectedIndicesRankMap, selectedIndex));
                                  var match = Belt_Array.get(selectingIndicesRankMapForSelectedArray, selectedIndex);
                                  var reverseCost = match ? Js_option.getWithDefault(0, Belt_HashMapInt.get(match[0], selectingIndex)) : 0;
                                  return forwardCost + reverseCost | 0;
                                })),
                          /* array */[0]
                        ]);
            })));
  var selectedCostsRows = Belt_List.toArray(Belt_List.map(selectedParsedData, (function () {
              return Belt_Array.concatMany(/* array */[
                          /* array */[0],
                          Belt_Array.makeBy(nSelecting + nSelected | 0, (function () {
                                  return 0;
                                })),
                          /* array */[0]
                        ]);
            })));
  var costs = Belt_Array.concatMany(/* array */[
        /* array */[selectingCostsRow],
        connectingCostsRows,
        selectedCostsRows,
        /* array */[Belt_Array.makeBy((nSelecting + nSelected | 0) + 2 | 0, (function () {
                  return 0;
                }))]
      ]);
  var nNodes = (nSelecting + nSelected | 0) + 2 | 0;
  var resultFlowNet = Curry._5(MCMF.default, nNodes, capacities, costs, 0, nNodes - 1 | 0).fnet;
  var errorEntry = /* record */[
    /* name */"?",
    /* canMatchWith */0,
    /* selectedNames : [] */0
  ];
  return Belt_Array.reduce(Belt_Array.mapWithIndex(Belt_Array.slice(resultFlowNet, 1, nSelecting), (function (selectingIndex, row) {
                    return /* tuple */[
                            selectingIndex,
                            row
                          ];
                  })), /* [] */0, (function (pairingsList, param) {
                var selectingIndex = param[0];
                var selectingName = Js_option.getWithDefault(errorEntry, Belt_List.get(selectingParsedData, selectingIndex))[/* name */0];
                var pairingsInThisRow = Belt_Array.reduce(Belt_Array.mapWithIndex(Belt_Array.slice(param[1], 1 + nSelecting | 0, nSelected), (function (selectedIndex, column) {
                            return /* tuple */[
                                    selectedIndex,
                                    column
                                  ];
                          })), /* [] */0, (function (pairingsListInThisRow, param) {
                        if (param[1] >= 1) {
                          var selectedIndex = param[0];
                          var selectedName = Js_option.getWithDefault(errorEntry, Belt_List.get(selectedParsedData, selectedIndex))[/* name */0];
                          var selectingRank = Js_option.getWithDefault(0, Belt_HashMapInt.get(Js_option.getWithDefault(Belt_HashMapInt.make(0), Belt_Array.get(selectedIndicesRankMapForSelectingArray, selectingIndex)), selectedIndex));
                          var selectedRank = Js_option.getWithDefault(0, Belt_HashMapInt.get(Js_option.getWithDefault(Belt_HashMapInt.make(0), Belt_Array.get(selectingIndicesRankMapForSelectedArray, selectedIndex)), selectingIndex));
                          return /* :: */[
                                  /* tuple */[
                                    selectingName,
                                    selectedName,
                                    selectingRank,
                                    selectedRank
                                  ],
                                  pairingsListInThisRow
                                ];
                        } else {
                          return pairingsListInThisRow;
                        }
                      }));
                return Pervasives.$at(pairingsInThisRow, pairingsList);
              }));
}

function suggestStrategy(selectingParsedData, selectedParsedData, mutualMatch) {
  var hasNoDuplicates = (function(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            return false;
          }
        }
       }
     return true;
   });
  var isMonotonous = function (l) {
    return Belt_List.every(l, (function (sns) {
                  return Curry._1(hasNoDuplicates, Belt_List.toArray(Belt_List.map(sns, (function (param) {
                                        return param[1];
                                      }))));
                }));
  };
  if (mutualMatch && isMonotonous(Belt_List.map(selectingParsedData, (function (s) {
                return s[/* selectedNames */2];
              }))) && isMonotonous(Belt_List.map(selectedParsedData, (function (s) {
                return s[/* selectedNames */2];
              })))) {
    return /* SelectingBreakTies */0;
  } else {
    return /* MCMF */2;
  }
}

function runMatch(currentState) {
  var match = currentState[/* matchStrategy */5];
  switch (match) {
    case 0 : 
        return popularManyToMany(currentState, false);
    case 1 : 
        return popularManyToMany(currentState, true);
    case 2 : 
        return minCostMaxFlow(currentState);
    
  }
}

exports.rankSortedArray = rankSortedArray;
exports.popularManyToMany = popularManyToMany;
exports.minCostMaxFlow = minCostMaxFlow;
exports.suggestStrategy = suggestStrategy;
exports.runMatch = runMatch;
/* ./MCMF Not a pure module */
