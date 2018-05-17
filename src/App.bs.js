'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Result = require("./result/Result.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var RunMatch = require("./matching/RunMatch.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var DataParser = require("./dataImporter/DataParser.bs.js");
var SampleData = require("./dataImporter/SampleData.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SharedTypes = require("./SharedTypes.bs.js");
var SideDataImporter = require("./dataImporter/SideDataImporter.bs.js");

((require('./styles.scss')));

((require('../node_modules/@material/switch/mdc-switch.scss')));

((require('../node_modules/@material/button/mdc-button.scss')));

var component = ReasonReact.reducerComponent("App");

function make() {
  var loadSampleData = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(self[/* state */1][/* selectingRowFormat */3], SampleData.candidates)]));
    if (self[/* state */1][/* mutualMatch */2]) {
      return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(self[/* state */1][/* selectedRowFormat */4], SampleData.positions)]));
    } else {
      return 0;
    }
  };
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              return loadSampleData(0, self);
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var state = self[/* state */1];
              var resultData = Belt_List.toArray(Belt_List.map(self[/* state */1][/* matchResult */11], (function (param) {
                          return /* array */[
                                  param[0],
                                  param[1]
                                ];
                        })));
              var match = List.length(self[/* state */1][/* matchResult */11]) > 0;
              return React.createElement("div", undefined, React.createElement("div", {
                              className: "page-content"
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
                                        }, "and vice versa")), React.createElement("div", {
                                      className: "data-importers"
                                    }, ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectingRawData */5], state[/* selectingName */0], state[/* selectedName */1], state[/* selectingRowFormat */3], (function (rowFormat) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [rowFormat]));
                                              }), (function (rawData) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [rawData]));
                                              }), true, state[/* selectingIgnoredRowIndices */9], /* array */[])), ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectedRawData */6], state[/* selectedName */1], state[/* selectingName */0], state[/* selectedRowFormat */4], (function (rowFormat) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [rowFormat]));
                                              }), (function (rawData) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [rawData]));
                                              }), state[/* mutualMatch */2], state[/* selectedIgnoredRowIndices */10], /* array */[]))), React.createElement("div", {
                                      className: "bottom-buttons"
                                    }, React.createElement("button", {
                                          className: "mdc-button",
                                          onClick: Curry._1(self[/* handle */0], loadSampleData)
                                        }, "Load Sample Data"), React.createElement("button", {
                                          className: "mdc-button mdc-button--raised",
                                          disabled: List.length(self[/* state */1][/* selectingParsedData */7]) === 0 || List.length(self[/* state */1][/* selectedParsedData */8]) === 0,
                                          onClick: (function () {
                                              return Curry._1(self[/* send */3], /* MatchNow */0);
                                            })
                                        }, "Match now")))), React.createElement("div", {
                              className: "page-content"
                            }, React.createElement("div", {
                                  className: "graph-pane"
                                }, match ? ReasonReact.element(/* None */0, /* None */0, Result.make(state, resultData, /* array */[])) : null)));
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
                      /* selectingIgnoredRowIndices */Belt_Set.make(SharedTypes.IntCmp),
                      /* selectedIgnoredRowIndices */Belt_Set.make(SharedTypes.IntCmp),
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
                            /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                            /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
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
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
                                  /* matchResult */state[/* matchResult */11]
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
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
                                  /* matchResult */state[/* matchResult */11]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */action[0],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData : array */[],
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData : [] */0,
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
                                  /* matchResult : [] */0
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */action[0],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData : array */[],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData : [] */0,
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
                                  /* matchResult : [] */0
                                ]]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */action[0],
                                  /* selectingRawData : array */[],
                                  /* selectedRawData */state[/* selectedRawData */6],
                                  /* selectingParsedData : [] */0,
                                  /* selectedParsedData */state[/* selectedParsedData */8],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
                                  /* matchResult : [] */0
                                ]]);
                  case 5 : 
                      var rawData = action[0];
                      var match = DataParser.parseData(rawData, state[/* selectingRowFormat */3], true);
                      var selectedNamesEntries = match[2];
                      var match$1 = !state[/* mutualMatch */2] && List.length(state[/* selectedParsedData */8]) === 0;
                      var match$2 = !state[/* mutualMatch */2] && List.length(state[/* selectedParsedData */8]) === 0;
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */rawData,
                                  /* selectedRawData */match$1 ? SampleData.sampleDataToRaw(state[/* selectedRowFormat */4], selectedNamesEntries) : state[/* selectedRawData */6],
                                  /* selectingParsedData */match[0],
                                  /* selectedParsedData */match$2 ? selectedNamesEntries : state[/* selectedParsedData */8],
                                  /* selectingIgnoredRowIndices */match[1],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */10],
                                  /* matchResult */state[/* matchResult */11]
                                ]]);
                  case 6 : 
                      var rawData$1 = action[0];
                      var match$3 = DataParser.parseData(rawData$1, state[/* selectedRowFormat */4], state[/* mutualMatch */2]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* mutualMatch */state[/* mutualMatch */2],
                                  /* selectingRowFormat */state[/* selectingRowFormat */3],
                                  /* selectedRowFormat */state[/* selectedRowFormat */4],
                                  /* selectingRawData */state[/* selectingRawData */5],
                                  /* selectedRawData */rawData$1,
                                  /* selectingParsedData */state[/* selectingParsedData */7],
                                  /* selectedParsedData */match$3[0],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */9],
                                  /* selectedIgnoredRowIndices */match$3[1],
                                  /* matchResult */state[/* matchResult */11]
                                ]]);
                  
                }
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var ifEmptyString = DataParser.ifEmptyString;

var listToSet = DataParser.listToSet;

var optString = DataParser.optString;

var optStringToOptInt = DataParser.optStringToOptInt;

var parseSelectees = DataParser.parseSelectees;

var parseSingleRow = DataParser.parseSingleRow;

var parseData = DataParser.parseData;

var IntCmp = SampleData.IntCmp;

var OptIntCmp = SampleData.OptIntCmp;

var positions = SampleData.positions;

var candidates = SampleData.candidates;

var sampleDataToRaw = SampleData.sampleDataToRaw;

var rankSortedArray = RunMatch.rankSortedArray;

var galeShapley = RunMatch.galeShapley;

var minCostMaxFlow = RunMatch.minCostMaxFlow;

var runMatch = RunMatch.runMatch;

exports.ifEmptyString = ifEmptyString;
exports.listToSet = listToSet;
exports.optString = optString;
exports.optStringToOptInt = optStringToOptInt;
exports.parseSelectees = parseSelectees;
exports.parseSingleRow = parseSingleRow;
exports.parseData = parseData;
exports.IntCmp = IntCmp;
exports.OptIntCmp = OptIntCmp;
exports.positions = positions;
exports.candidates = candidates;
exports.sampleDataToRaw = sampleDataToRaw;
exports.rankSortedArray = rankSortedArray;
exports.galeShapley = galeShapley;
exports.minCostMaxFlow = minCostMaxFlow;
exports.runMatch = runMatch;
exports.component = component;
exports.make = make;
/*  Not a pure module */
