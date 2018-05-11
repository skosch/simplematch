'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactHandsontable = require("react-handsontable");

function make(settings, children) {
  return ReasonReact.wrapJsForReason(ReactHandsontable, {
              settings: settings
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
