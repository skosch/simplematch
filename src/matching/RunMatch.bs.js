'use strict';

var MCMF = require("./MCMF.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Belt_HashMapInt = require("bs-platform/lib/js/belt_HashMapInt.js");
var Belt_HashMapString = require("bs-platform/lib/js/belt_HashMapString.js");

var cmp = Caml_obj.caml_compare;

var IntCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp]);

function galeShapley() {
  return /* :: */[
          /* tuple */[
            "bla1",
            "bla2"
          ],
          /* :: */[
            /* tuple */[
              "bla2",
              "bla3"
            ],
            /* [] */0
          ]
        ];
}

function minCostMaxFlow(currentState) {
  var selectingParsedData = currentState[/* selectingParsedData */7];
  var selectedParsedData = currentState[/* selectedParsedData */8];
  var selectedIndices = Belt_HashMapString.fromArray(Belt_List.toArray(Belt_List.mapWithIndex(selectedParsedData, (function (i, s) {
                  return /* tuple */[
                          s[/* name */0],
                          i
                        ];
                }))));
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
              var selectedIndicesSet = Belt_Set.fromArray(Belt_List.toArray(Belt_List.map(s[/* selectedNames */2], (function (param) {
                              return Belt_HashMapString.get(selectedIndices, param[0]);
                            }))), IntCmp);
              return Belt_Array.concatMany(/* array */[
                          /* array */[0],
                          Belt_Array.makeBy(nSelecting, (function () {
                                  return 0;
                                })),
                          Belt_Array.makeBy(nSelected, (function (i) {
                                  var match = Belt_Set.has(selectedIndicesSet, /* Some */[i]);
                                  if (match) {
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
  var connectingCostsRows = Belt_List.toArray(Belt_List.map(selectingParsedData, (function (s) {
              var selectedIndicesRankMap = Belt_HashMapInt.fromArray(Belt_List.toArray(Belt_List.map(s[/* selectedNames */2], (function (param) {
                              return /* tuple */[
                                      Js_option.getWithDefault(-1, Belt_HashMapString.get(selectedIndices, param[0])),
                                      param[1]
                                    ];
                            }))));
              return Belt_Array.concatMany(/* array */[
                          /* array */[0],
                          Belt_Array.makeBy(nSelecting, (function () {
                                  return 0;
                                })),
                          Belt_Array.makeBy(nSelected, (function (i) {
                                  return Js_option.getWithDefault(0, Belt_HashMapInt.get(selectedIndicesRankMap, i));
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
  var resultFlowNet = Curry._5(MCMF.runMinCostMaxFlow, nNodes, capacities, costs, 0, nNodes - 1 | 0).fnet;
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
                var selectingName = Js_option.getWithDefault(errorEntry, Belt_List.get(selectingParsedData, param[0]))[/* name */0];
                var pairingsInThisRow = Belt_Array.reduce(Belt_Array.mapWithIndex(Belt_Array.slice(param[1], 1 + nSelecting | 0, nSelected), (function (selectedIndex, column) {
                            return /* tuple */[
                                    selectedIndex,
                                    column
                                  ];
                          })), /* [] */0, (function (pairingsListInThisRow, param) {
                        if (param[1] >= 1) {
                          var selectedName = Js_option.getWithDefault(errorEntry, Belt_List.get(selectedParsedData, param[0]))[/* name */0];
                          return /* :: */[
                                  /* tuple */[
                                    selectingName,
                                    selectedName
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

function runMatch(currentState) {
  var mutualRankedMatch = currentState[/* mutualMatch */2];
  if (mutualRankedMatch) {
    return galeShapley(currentState);
  } else {
    return minCostMaxFlow(currentState);
  }
}

exports.IntCmp = IntCmp;
exports.galeShapley = galeShapley;
exports.minCostMaxFlow = minCostMaxFlow;
exports.runMatch = runMatch;
/* IntCmp Not a pure module */
