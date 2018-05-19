'use strict';

var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var HotTable = require("../dataImporter/HotTable.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SharedTypes = require("../SharedTypes.bs.js");
var Belt_HashMapInt = require("bs-platform/lib/js/belt_HashMapInt.js");

var component = ReasonReact.statelessComponent("Result");

function make(currentState, resultData, _) {
  var statistics = function () {
    var match = Belt_Array.reduce(resultData, /* tuple */[
          Belt_Set.make(SharedTypes.StrCmp),
          Belt_Set.make(SharedTypes.StrCmp),
          Belt_Set.make(SharedTypes.PairingCmp)
        ], (function (param, c) {
            var selectingName = Js_option.getWithDefault("", Belt_Array.get(c, 0));
            var selectedName = Js_option.getWithDefault("", Belt_Array.get(c, 1));
            var pairing = /* tuple */[
              selectingName,
              selectedName
            ];
            return /* tuple */[
                    Belt_Set.add(param[0], selectingName),
                    Belt_Set.add(param[1], selectedName),
                    Belt_Set.add(param[2], pairing)
                  ];
          }));
    var matchedPairings = match[2];
    var selectedMatchedNames = match[1];
    var selectingMatchedNames = match[0];
    var allSelectorNames = Belt_List.toArray(Belt_List.map(currentState[/* selectingParsedData */9], (function (e) {
                return e[/* name */0];
              })));
    var allSelecteeNames = Belt_List.toArray(Belt_List.map(currentState[/* selectedParsedData */10], (function (e) {
                return e[/* name */0];
              })));
    var match$1 = Belt_List.reduce(currentState[/* selectingParsedData */9], /* tuple */[
          0,
          Belt_Set.fromArray(allSelectorNames, SharedTypes.StrCmp),
          Belt_HashMapInt.make(30),
          0
        ], (function (param, c) {
            var selectingRanks = param[2];
            var selectorMatched = Belt_Set.has(selectingMatchedNames, c[/* name */0]);
            var newSelectorsMatched = param[0] + (
              selectorMatched ? 1 : 0
            ) | 0;
            var newUnmatchedNames = Belt_Set.remove(param[1], c[/* name */0]);
            var match = Belt_List.reduce(c[/* selectedNames */2], /* tuple */[
                  selectingRanks,
                  param[3]
                ], (function (param, param$1) {
                    var r = param$1[1];
                    var srw = param[1];
                    var psr = param[0];
                    if (Belt_Set.has(matchedPairings, /* tuple */[
                            c[/* name */0],
                            param$1[0]
                          ])) {
                      var oldCount = Js_option.getWithDefault(0, Belt_HashMapInt.get(selectingRanks, r));
                      Belt_HashMapInt.set(psr, r, oldCount + 1 | 0);
                    }
                    var match = r > srw;
                    return /* tuple */[
                            psr,
                            match ? r : srw
                          ];
                  }));
            return /* tuple */[
                    newSelectorsMatched,
                    newUnmatchedNames,
                    match[0],
                    match[1]
                  ];
          }));
    var match$2 = Belt_List.reduce(currentState[/* selectedParsedData */10], /* tuple */[
          0,
          Belt_Set.fromArray(allSelecteeNames, SharedTypes.StrCmp),
          Belt_HashMapInt.make(30),
          0
        ], (function (param, c) {
            var selectedRanks = param[2];
            var selecteeMatched = Belt_Set.has(selectedMatchedNames, c[/* name */0]);
            var newSelecteesMatched = param[0] + (
              selecteeMatched ? 1 : 0
            ) | 0;
            var newUnmatchedNames = Belt_Set.remove(param[1], c[/* name */0]);
            var match = Belt_List.reduce(c[/* selectedNames */2], /* tuple */[
                  selectedRanks,
                  param[3]
                ], (function (param, param$1) {
                    var r = param$1[1];
                    var srw = param[1];
                    var psr = param[0];
                    if (Belt_Set.has(matchedPairings, /* tuple */[
                            param$1[0],
                            c[/* name */0]
                          ])) {
                      var oldCount = Js_option.getWithDefault(0, Belt_HashMapInt.get(selectedRanks, r));
                      Belt_HashMapInt.set(psr, r, oldCount + 1 | 0);
                    }
                    var match = r > srw;
                    return /* tuple */[
                            psr,
                            match ? r : srw
                          ];
                  }));
            return /* tuple */[
                    newSelecteesMatched,
                    newUnmatchedNames,
                    match[0],
                    match[1]
                  ];
          }));
    return /* record */[
            /* selectorsMatched */match$1[0],
            /* selecteesMatched */match$2[0],
            /* unmatchedSelectorNames */match$1[1],
            /* unmatchedSelecteeNames */match$2[1],
            /* selectingRanks */match$1[2],
            /* selectedRanks */match$2[2],
            /* selectingRanksWorst */match$1[3],
            /* selectedRanksWorst */match$2[3]
          ];
  };
  var columnHeader = function (index) {
    if (index !== 0) {
      if (index !== 1) {
        return "";
      } else {
        return currentState[/* selectedName */1];
      }
    } else {
      return currentState[/* selectingName */0];
    }
  };
  var get_max_value = function (__x) {
    return Belt_Array.reduce(__x, 0, (function (p, c) {
                  var match = c > p;
                  if (match) {
                    return c;
                  } else {
                    return p;
                  }
                }));
  };
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var match = statistics(/* () */0);
              var selecteesMatched = match[/* selecteesMatched */1];
              var selectorsMatched = match[/* selectorsMatched */0];
              var rankHistBars = function (rankMap, worstRank) {
                var modeRank = get_max_value(Belt_HashMapInt.valuesToArray(rankMap));
                return Belt_Array.map(Belt_Array.range(1, worstRank), (function (r) {
                              var pcHeight = Js_option.getWithDefault(0, Belt_HashMapInt.get(rankMap, r)) * 100.0 / modeRank;
                              return React.createElement("div", {
                                          key: String(r),
                                          className: "hist-bar",
                                          style: {
                                            height: Pervasives.string_of_float(pcHeight) + "0%"
                                          },
                                          title: String(r)
                                        });
                            }));
              };
              return React.createElement("div", {
                          className: "result"
                        }, React.createElement("div", {
                              className: "result-table"
                            }, ReasonReact.element(/* None */0, /* None */0, HotTable.make({
                                      colHeaders: columnHeader,
                                      rowHeaders: true,
                                      copyPaste: true,
                                      width: "50%",
                                      maxCols: 2,
                                      stretchH: "all",
                                      data: resultData
                                    }, /* array */[]))), React.createElement("div", {
                              className: "result-details"
                            }, React.createElement("div", {
                                  className: "counts"
                                }, React.createElement("div", {
                                      className: "pairings"
                                    }, React.createElement("div", {
                                          className: "top-label"
                                        }, "Pairings"), String(resultData.length)), React.createElement("div", {
                                      className: "matched-counts"
                                    }, React.createElement("div", {
                                          className: "selectors-matched"
                                        }, React.createElement("div", {
                                              className: "top-label"
                                            }, $$String.capitalize(currentState[/* selectingName */0])), String(selectorsMatched), React.createElement("span", {
                                              className: "label"
                                            }, "matched,"), String(Belt_List.length(currentState[/* selectingParsedData */9]) - selectorsMatched | 0), React.createElement("span", {
                                              className: "label"
                                            }, "unmatched"), React.createElement("div", {
                                              className: "histogram"
                                            }, rankHistBars(match[/* selectingRanks */4], match[/* selectingRanksWorst */6]))), React.createElement("div", {
                                          className: "selectors-matched"
                                        }, React.createElement("div", {
                                              className: "top-label"
                                            }, $$String.capitalize(currentState[/* selectedName */1])), String(selecteesMatched), React.createElement("span", {
                                              className: "label"
                                            }, "matched,"), String(Belt_List.length(currentState[/* selectedParsedData */10]) - selecteesMatched | 0), React.createElement("span", {
                                              className: "label"
                                            }, "unmatched"), React.createElement("div", {
                                              className: "histogram"
                                            }, rankHistBars(match[/* selectedRanks */5], match[/* selectedRanksWorst */7])))))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var IntCmp = SharedTypes.IntCmp;

var StrCmp = SharedTypes.StrCmp;

var PairingCmp = SharedTypes.PairingCmp;

var OptIntCmp = SharedTypes.OptIntCmp;

exports.IntCmp = IntCmp;
exports.StrCmp = StrCmp;
exports.PairingCmp = PairingCmp;
exports.OptIntCmp = OptIntCmp;
exports.component = component;
exports.make = make;
/* component Not a pure module */
