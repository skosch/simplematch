'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var AutosizeHotTable = require("./AutosizeHotTable");

function make(settings, children) {
  return ReasonReact.wrapJsForReason(AutosizeHotTable.default, {
              settings: settings
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
