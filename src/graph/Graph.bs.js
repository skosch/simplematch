'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Cytoscape = require("./Cytoscape.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var Belt_HashMapString = require("bs-platform/lib/js/belt_HashMapString.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var component = ReasonReact.statelessComponent("Graph");

var class_tables = [
  0,
  0,
  0
];

function make(selectingParsedData, selectedParsedData, resultData, _) {
  var nSelecting = Belt_List.length(selectingParsedData);
  var nSelected = Belt_List.length(selectedParsedData);
  var longerSide = Math.max(nSelecting, nSelected);
  var existingNodeNamesMap = Belt_List.reduce(Pervasives.$at(selectingParsedData, selectedParsedData), Belt_HashMapString.make(nSelecting + nSelected | 0), (function (p, c) {
          Belt_HashMapString.set(p, c[/* name */0], true);
          return p;
        }));
  var acceptedEdgesMap = Belt_Array.reduce(resultData, Belt_HashMapString.make(resultData.length), (function (p, c) {
          if (c.length !== 2) {
            throw [
                  Caml_builtin_exceptions.match_failure,
                  [
                    "Graph.re",
                    48,
                    12
                  ]
                ];
          } else {
            var selecting = c[0];
            var selected = c[1];
            Belt_HashMapString.set(p, selecting + ("_to_" + selected), true);
            return p;
          }
        }));
  var sideDataEntryToElementArray = function (entry, x, y, side) {
    var node = {
      data: {
        group: "nodes",
        id: entry[/* name */0],
        source: undefined,
        target: undefined,
        side: side,
        rank: 0,
        inResult: false
      },
      position: {
        y: Caml_int32.imul(y, 7),
        x: x
      }
    };
    var edgesFromSelectedNodes = Belt_List.toArray(Belt_List.reduce(entry[/* selectedNames */2], /* [] */0, (function (p, param) {
                var sn = param[0];
                if (Belt_HashMapString.has(existingNodeNamesMap, sn)) {
                  var edgeName = entry[/* name */0] + ("_to_" + sn);
                  return /* :: */[
                          {
                            data: {
                              group: "edges",
                              id: edgeName,
                              source: entry[/* name */0],
                              target: sn,
                              side: undefined,
                              rank: param[1],
                              inResult: Belt_HashMapString.has(acceptedEdgesMap, edgeName)
                            },
                            position: undefined
                          },
                          p
                        ];
                } else {
                  return p;
                }
              })));
    return Belt_Array.concat(/* array */[node], edgesFromSelectedNodes);
  };
  var selectingElements = Belt_List.toArray(Belt_List.map(Belt_List.mapWithIndex(selectingParsedData, (function (i, x) {
                  return /* tuple */[
                          i,
                          x
                        ];
                })), (function (param) {
              return sideDataEntryToElementArray(param[1], 0, (param[0] << 1) - nSelecting | 0, "selecting");
            })));
  var selectedElements = Belt_List.toArray(Belt_List.map(Belt_List.mapWithIndex(selectedParsedData, (function (i, x) {
                  return /* tuple */[
                          i,
                          x
                        ];
                })), (function (param) {
              return sideDataEntryToElementArray(param[1], Caml_int32.imul(7, longerSide), (param[0] << 1) - nSelected | 0, "selected");
            })));
  var elements = Belt_Array.concatMany(Belt_Array.concatMany(/* array */[
              selectingElements,
              selectedElements
            ])).sort((function (e1, e2) {
          return -Caml_primitive.caml_bool_compare(e1.data.source === undefined, e2.data.source === undefined) | 0;
        }));
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
              if (!class_tables[0]) {
                var $$class = CamlinternalOO.create_table(0);
                var env_init = function () {
                  return CamlinternalOO.create_object_opt(0, $$class);
                };
                CamlinternalOO.init_class($$class);
                class_tables[0] = env_init;
              }
              return React.createElement("div", {
                          className: "graph"
                        }, ReasonReact.element(/* None */0, /* None */0, Cytoscape.make(elements, (
          [{
            selector: "node",
            style: {
              "background-color": "#666",
              "label": "data(id)",
              "width": 4,
              "height": 4,
              "font-size": "2.7px",
              "font-family": "Roboto Mono",
              "font-weight": "500",
              "color": "#333",
              "text-outline-color": "#fff",
              "text-outline-width": "0.5px",
              "background-color": e => e.data("side") === "selecting" ? "#1a4a8f" : "#ff6953",
            },
          },
          {
            selector: "edge",
            style: {
              "width": e => e.data("inResult") ? 2 : 0.4,
              "line-color": e => `hsl(${100/e.data("rank")}, 40%, 70%)`,
              "target-arrow-color": e => `hsl(${100/e.data("rank")}, 40%, 70%)`,
              "target-arrow-shape": "triangle",
              "arrow-scale": 0.34,
              "curve-style": "bezier",
            },
          }]
        ), /* [] */0, Curry._1(class_tables[0], 0), /* array */[])), React.createElement("div", {
                              id: "graph-container"
                            }));
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
