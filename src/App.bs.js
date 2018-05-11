'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Graph = require("./graph/Graph.bs.js");
var React = require("react");
var Result = require("./result/Result.bs.js");
var RunMatch = require("./matching/RunMatch.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var DataParser = require("./dataImporter/DataParser.bs.js");
var SampleData = require("./dataImporter/SampleData.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SideDataImporter = require("./dataImporter/SideDataImporter.bs.js");

((require('./styles.scss')));

((require('../node_modules/@material/switch/mdc-switch.scss')));

var component = ReasonReact.reducerComponent("App");

function make() {
  var loadSampleData = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(self[/* state */1][/* selectingRowFormat */3], SampleData.candidates)]));
    return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(self[/* state */1][/* selectedRowFormat */4], SampleData.positions)]));
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
          /* render */(function (self) {
              var state = self[/* state */1];
              var resultData = Belt_List.toArray(Belt_List.map(self[/* state */1][/* matchResult */9], (function (param) {
                          return /* array */[
                                  param[0],
                                  param[1]
                                ];
                        })));
              var match = List.length(self[/* state */1][/* selectingParsedData */7]) > 0 || List.length(self[/* state */1][/* selectedParsedData */8]) > 0;
              var match$1 = List.length(self[/* state */1][/* matchResult */9]) > 0;
              return React.createElement("div", {
                          className: "page-split"
                        }, React.createElement("div", {
                              className: "input-pane"
                            }, React.createElement("div", {
                                  className: "names-question"
                                }, React.createElement("input", {
                                      type: "text",
                                      value: self[/* state */1][/* selectingName */0],
                                      onChange: (function (_event) {
                                          return Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, [_event.target.value]));
                                        })
                                    }), React.createElement("span", undefined, " are ranking "), React.createElement("input", {
                                      type: "text",
                                      value: self[/* state */1][/* selectedName */1],
                                      onChange: (function (_event) {
                                          return Curry._1(self[/* send */3], /* UpdateSelectedName */Block.__(1, [_event.target.value]));
                                        })
                                    }), React.createElement("span", undefined), React.createElement("div", {
                                      className: "mdc-switch"
                                    }, React.createElement("input", {
                                          className: "mdc-switch__native-control",
                                          id: "mutual-switch",
                                          role: "switch",
                                          checked: self[/* state */1][/* mutualMatch */2],
                                          type: "checkbox",
                                          onChange: (function (_event) {
                                              return Curry._1(self[/* send */3], /* UpdateMutualMatch */Block.__(2, [_event.target.checked]));
                                            })
                                        }), React.createElement("div", {
                                          className: "mdc-switch__background"
                                        }, React.createElement("div", {
                                              className: "mdc-switch__knob"
                                            }))), React.createElement("label", {
                                      htmlFor: "mutual-switch"
                                    }, "and vice versa")), ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectingRawData */5], state[/* selectingName */0], state[/* selectedName */1], state[/* selectingRowFormat */3], (function (rowFormat) {
                                        return Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [rowFormat]));
                                      }), (function (rawData) {
                                        return Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [rawData]));
                                      }), true, /* array */[])), ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectedRawData */6], state[/* selectedName */1], state[/* selectingName */0], state[/* selectedRowFormat */4], (function (rowFormat) {
                                        return Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [rowFormat]));
                                      }), (function (rawData) {
                                        return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [rawData]));
                                      }), state[/* mutualMatch */2], /* array */[])), React.createElement("button", {
                                  onClick: Curry._1(self[/* handle */0], loadSampleData)
                                }, "Load Sample Data"), match ? React.createElement("div", {
                                    className: "match-now"
                                  }, React.createElement("button", {
                                        onClick: (function () {
                                            return Curry._1(self[/* send */3], /* MatchNow */0);
                                          })
                                      }, "Match now")) : null), React.createElement("div", {
                              className: "graph-pane"
                            }, ReasonReact.element(/* None */0, /* None */0, Graph.make(state[/* selectingParsedData */7], state[/* selectedParsedData */8], resultData, /* array */[])), match$1 ? ReasonReact.element(/* None */0, /* None */0, Result.make(state, resultData, /* array */[])) : null));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* selectingName */"candidates",
                      /* selectedName */"positions",
                      /* mutualMatch */false,
                      /* selectingRowFormat : SelectedInMultipleRows */1,
                      /* selectedRowFormat : SelectedInMultipleRows */1,
                      /* selectingRawData : array */[],
                      /* selectedRawData : array */[],
                      /* selectingParsedData : [] */0,
                      /* selectedParsedData : [] */0,
                      /* matchResult : [] */0
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                return /* Update */Block.__(0, [/* record */[
                            /* selectingName */state[/* selectingName */0],
                            /* selectedName */state[/* selectedName */1],
                            /* mutualMatch */state[/* mutualMatch */2],
                            /* selectingRowFormat */state[/* selectingRowFormat */3],
                            /* selectedRowFormat */state[/* selectedRowFormat */4],
                            /* selectingRawData */state[/* selectingRawData */5],
                            /* selectedRawData */state[/* selectedRawData */6],
                            /* selectingParsedData */state[/* selectingParsedData */7],
                            /* selectedParsedData */state[/* selectedParsedData */8],
                            /* matchResult */RunMatch.runMatch(state)
                          ]]);
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */action[0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */action[0],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */action[0],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */action[0],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */action[0],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  case 5 : 
                      var rawData = action[0];
                      var match = DataParser.parseData(rawData, state[/* selectingRowFormat */3]);
                      var match$1 = !state[/* mutualMatch */2] && List.length(state[/* selectedParsedData */8]) === 0;
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */rawData,
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData */match[0],
                                  /* selectedParsedData */match$1 ? match[1] : state[/* selectedParsedData */8],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  case 6 : 
                      var rawData$1 = action[0];
                      var match$2 = DataParser.parseData(rawData$1, state[/* selectedRowFormat */4]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */rawData$1,
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */match$2[0],
                                  /* matchResult */state[/* matchResult */9]
                                ]]);
                  
                }
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var parseData = DataParser.parseData;

var positions = SampleData.positions;

var candidates = SampleData.candidates;

var sampleDataToRaw = SampleData.sampleDataToRaw;

var IntCmp = RunMatch.IntCmp;

var galeShapley = RunMatch.galeShapley;

var minCostMaxFlow = RunMatch.minCostMaxFlow;

var runMatch = RunMatch.runMatch;

exports.parseData = parseData;
exports.positions = positions;
exports.candidates = candidates;
exports.sampleDataToRaw = sampleDataToRaw;
exports.IntCmp = IntCmp;
exports.galeShapley = galeShapley;
exports.minCostMaxFlow = minCostMaxFlow;
exports.runMatch = runMatch;
exports.component = component;
exports.make = make;
/*  Not a pure module */