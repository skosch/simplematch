'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactCytoscape = require("react-cytoscape");

function make(elements, style, cyRef, _, children) {
  return ReasonReact.wrapJsForReason(ReactCytoscape.ReactCytoscape, {
              elements: elements,
              cyRef: cyRef,
              cytoscapeOptions: ({
       minZoom: 0.2,
       maxZoom: 5, 
       motionBlur: true,
       mousewheelSensitivity: 0.8,
    }),
              containerID: "graph-container",
              style: style,
              layout: {
                name: "preset"
              }
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
