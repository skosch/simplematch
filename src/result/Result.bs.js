'use strict';

var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var HotTable = require("../dataImporter/HotTable.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Belt_HashMapString = require("bs-platform/lib/js/belt_HashMapString.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var component = ReasonReact.statelessComponent("Result");

function make(currentState, resultData, _) {
  var statistics = function () {
    var matchedNames = Belt_Array.reduce(resultData, Belt_HashMapString.make((resultData.length << 1)), (function (p, c) {
            Belt_HashMapString.set(p, Js_option.getWithDefault("", Belt_Array.get(c, 0)), true);
            Belt_HashMapString.set(p, Js_option.getWithDefault("", Belt_Array.get(c, 1)), true);
            return p;
          }));
    var selectorsMatched = Belt_List.reduce(currentState[/* selectingParsedData */7], 0, (function (p, c) {
            var match = Belt_HashMapString.has(matchedNames, c[/* name */0]);
            return p + (
                    match ? 1 : 0
                  ) | 0;
          }));
    var selecteesMatched = Belt_List.reduce(currentState[/* selectedParsedData */8], 0, (function (p, c) {
            var match = Belt_HashMapString.has(matchedNames, c[/* name */0]);
            return p + (
                    match ? 1 : 0
                  ) | 0;
          }));
    return /* record */[
            /* selectorsMatched */selectorsMatched,
            /* selecteesMatched */selecteesMatched
          ];
  };
  var columnHeader = function (index) {
    if (index !== 0) {
      if (index !== 1) {
        throw [
              Caml_builtin_exceptions.match_failure,
              [
                "Result.re",
                35,
                4
              ]
            ];
      } else {
        return currentState[/* selectedName */1];
      }
    } else {
      return currentState[/* selectingName */0];
    }
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
                                            }, "matched,"), String(Belt_List.length(currentState[/* selectingParsedData */7]) - selectorsMatched | 0), React.createElement("span", {
                                              className: "label"
                                            }, "unmatched")), React.createElement("div", {
                                          className: "selectors-matched"
                                        }, React.createElement("div", {
                                              className: "top-label"
                                            }, $$String.capitalize(currentState[/* selectedName */1])), String(selecteesMatched), React.createElement("span", {
                                              className: "label"
                                            }, "matched,"), String(Belt_List.length(currentState[/* selectedParsedData */8]) - selecteesMatched | 0), React.createElement("span", {
                                              className: "label"
                                            }, "unmatched"))))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
