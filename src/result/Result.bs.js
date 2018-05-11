'use strict';

var React = require("react");
var HotTable = require("../dataImporter/HotTable.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var component = ReasonReact.statelessComponent("Result");

function make(currentState, resultData, _) {
  var columnHeader = function (index) {
    if (index !== 0) {
      if (index !== 1) {
        throw [
              Caml_builtin_exceptions.match_failure,
              [
                "Result.re",
                7,
                32
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
              return React.createElement("div", {
                          className: "result"
                        }, ReasonReact.element(/* None */0, /* None */0, HotTable.make({
                                  colHeaders: columnHeader,
                                  rowHeaders: true,
                                  copyPaste: true,
                                  width: "50%",
                                  height: 300,
                                  maxCols: 2,
                                  stretchH: "all",
                                  data: resultData
                                }, /* array */[])));
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
