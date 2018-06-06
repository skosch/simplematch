'use strict';

var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var HotTable = require("../dataImporter/HotTable.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Pluralize = require("pluralize");
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
          Belt_HashMapInt.make(30),
          0,
          Belt_HashMapInt.make(30),
          0
        ], (function (param, c) {
            var selectedRank = c[3];
            var selectingRank = c[2];
            var selectedRanksWorst = param[5];
            var selectedRanks = param[4];
            var selectingRanksWorst = param[3];
            var selectingRanks = param[2];
            var oldSelectingRankCount = Js_option.getWithDefault(0, Belt_HashMapInt.get(selectingRanks, selectingRank));
            Belt_HashMapInt.set(selectingRanks, selectingRank, oldSelectingRankCount + 1 | 0);
            var oldSelectedRankCount = Js_option.getWithDefault(0, Belt_HashMapInt.get(selectedRanks, selectedRank));
            Belt_HashMapInt.set(selectedRanks, selectedRank, oldSelectedRankCount + 1 | 0);
            var match = selectingRank > selectingRanksWorst;
            var match$1 = selectedRank > selectedRanksWorst;
            return /* tuple */[
                    Belt_Set.add(param[0], c[0]),
                    Belt_Set.add(param[1], c[1]),
                    selectingRanks,
                    match ? selectingRank : selectingRanksWorst,
                    selectedRanks,
                    match$1 ? selectedRank : selectedRanksWorst
                  ];
          }));
    var allSelectorNames = Belt_List.toArray(Belt_List.map(currentState[/* selectingParsedData */10], (function (e) {
                return e[/* name */0];
              })));
    var allSelecteeNames = Belt_List.toArray(Belt_List.map(currentState[/* selectedParsedData */11], (function (e) {
                return e[/* name */0];
              })));
    var unmatchedSelectorNames = Belt_List.reduce(currentState[/* selectingParsedData */10], Belt_Set.fromArray(allSelectorNames, SharedTypes.StrCmp), (function (unmatchedSelectorNames, c) {
            return Belt_Set.remove(unmatchedSelectorNames, c[/* name */0]);
          }));
    var unmatchedSelecteeNames = Belt_List.reduce(currentState[/* selectedParsedData */11], Belt_Set.fromArray(allSelecteeNames, SharedTypes.StrCmp), (function (unmatchedSelecteeNames, c) {
            return Belt_Set.remove(unmatchedSelecteeNames, c[/* name */0]);
          }));
    return /* record */[
            /* selectorsMatched */Belt_Set.size(match[0]),
            /* selecteesMatched */Belt_Set.size(match[1]),
            /* unmatchedSelectorNames */unmatchedSelectorNames,
            /* unmatchedSelecteeNames */unmatchedSelecteeNames,
            /* selectingRanks */match[2],
            /* selectedRanks */match[4],
            /* selectingRanksWorst */match[3],
            /* selectedRanksWorst */match[5]
          ];
  };
  var columnHeader = function (index) {
    if (index > 3 || index < 0) {
      return "";
    } else {
      switch (index) {
        case 0 : 
            return Pluralize.singular(currentState[/* selectingName */0]);
        case 1 : 
            return Pluralize.singular(currentState[/* selectedName */1]);
        case 2 : 
            return Pluralize.singular(currentState[/* selectingName */0]) + (" ranked " + Pluralize.singular(currentState[/* selectedName */1]));
        case 3 : 
            return Pluralize.singular(currentState[/* selectedName */1]) + (" ranked " + Pluralize.singular(currentState[/* selectingName */0]));
        
      }
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
                                          className: "hist-bar-with-label"
                                        }, React.createElement("div", {
                                              key: String(r),
                                              className: "hist-bar",
                                              style: {
                                                height: Pervasives.string_of_float(pcHeight) + "0%"
                                              },
                                              title: String(r)
                                            }), React.createElement("div", {
                                              className: "hist-label"
                                            }, String(r)));
                            }));
              };
              var match$1 = currentState[/* mutualMatch */4];
              return React.createElement("div", {
                          className: "result"
                        }, React.createElement("div", {
                              className: "result-table"
                            }, ReasonReact.element(/* None */0, /* None */0, HotTable.make({
                                      colHeaders: columnHeader,
                                      rowHeaders: true,
                                      copyPaste: true,
                                      width: "50%",
                                      maxCols: match$1 ? 4 : 3,
                                      stretchH: "all",
                                      data: resultData
                                    }, /* array */[]))), React.createElement("div", {
                              className: "result-details"
                            }, React.createElement("table", undefined, React.createElement("tbody", undefined, React.createElement("tr", undefined, React.createElement("th", {
                                              className: "top-label",
                                              colSpan: 3
                                            }, "Matches")), React.createElement("tr", undefined, React.createElement("td", {
                                              colSpan: 3
                                            }, React.createElement("span", {
                                                  className: "count"
                                                }, String(resultData.length)), React.createElement("br", undefined), React.createElement("span", {
                                                  className: "label"
                                                }, "total"))), React.createElement("tr", undefined, React.createElement("th", {
                                              className: "top-label",
                                              colSpan: 3
                                            }, $$String.capitalize(currentState[/* selectingName */0]))), React.createElement("tr", undefined, React.createElement("td", undefined, React.createElement("span", {
                                                  className: "count"
                                                }, String(selectorsMatched)), React.createElement("br", undefined), React.createElement("span", {
                                                  className: "label"
                                                }, "matched")), React.createElement("td", undefined, React.createElement("span", {
                                                  className: "count"
                                                }, String(Belt_List.length(currentState[/* selectingParsedData */10]) - selectorsMatched | 0)), React.createElement("br", undefined), React.createElement("span", {
                                                  className: "label"
                                                }, "unmatched")), React.createElement("td", undefined, React.createElement("div", {
                                                  className: "histogram"
                                                }, rankHistBars(match[/* selectingRanks */4], match[/* selectingRanksWorst */6])), React.createElement("span", {
                                                  className: "label"
                                                }, "matches by rank"))), React.createElement("tr", undefined, React.createElement("th", {
                                              className: "top-label",
                                              colSpan: 5
                                            }, $$String.capitalize(currentState[/* selectedName */1]))), React.createElement("tr", undefined, React.createElement("td", undefined, React.createElement("span", {
                                                  className: "count"
                                                }, String(selecteesMatched)), React.createElement("br", undefined), React.createElement("span", {
                                                  className: "label"
                                                }, "matched")), React.createElement("td", undefined, React.createElement("span", {
                                                  className: "count"
                                                }, String(Belt_List.length(currentState[/* selectedParsedData */11]) - selecteesMatched | 0)), React.createElement("br", undefined), React.createElement("span", {
                                                  className: "label"
                                                }, "unmatched")), React.createElement("td", undefined, React.createElement("div", {
                                                  className: "histogram"
                                                }, rankHistBars(match[/* selectedRanks */5], match[/* selectedRanksWorst */7])), React.createElement("span", {
                                                  className: "label"
                                                }, "matches by rank")))))));
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
