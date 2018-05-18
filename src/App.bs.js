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

((require('../node_modules/@material/menu/mdc-menu.scss')));

var component = ReasonReact.reducerComponent("App");

function make() {
  var loadImperialInternships = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, ["Applicants"]));
    Curry._1(self[/* send */3], /* UpdateSelectedName */Block.__(1, ["Internships"]));
    Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [/* SelectedInMultipleRows */1]));
    Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [/* SelectedInMultipleRows */1]));
    Curry._1(self[/* send */3], /* UpdateMutualMatch */Block.__(2, [true]));
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(/* SelectedInMultipleRows */1, SampleData.imperialCandidates)]));
    return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(/* SelectedInMultipleRows */1, SampleData.imperialPositions)]));
  };
  var loadMarriageProposals = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, ["Men"]));
    Curry._1(self[/* send */3], /* UpdateSelectedName */Block.__(1, ["Women"]));
    Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [/* SelectedInColumns */0]));
    Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [/* SelectedInColumns */0]));
    Curry._1(self[/* send */3], /* UpdateMutualMatch */Block.__(2, [true]));
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(/* SelectedInColumns */0, SampleData.marriageMen)]));
    return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(/* SelectedInColumns */0, SampleData.marriageWomen)]));
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
              var resultData = Belt_List.toArray(Belt_List.map(self[/* state */1][/* matchResult */12], (function (param) {
                          return /* array */[
                                  param[0],
                                  param[1]
                                ];
                        })));
              var match = state[/* sampleMenuOpen */2];
              var match$1 = List.length(self[/* state */1][/* matchResult */12]) > 0;
              return React.createElement("div", {
                          onClick: (function () {
                              return Curry._1(self[/* send */3], /* CloseSampleMenu */1);
                            })
                        }, React.createElement("div", {
                              className: "splash"
                            }, React.createElement("div", {
                                  className: "plank-logo"
                                }, "Plank"), React.createElement("div", {
                                  className: "splash-content"
                                }, React.createElement("h1", undefined, "MiniMatcher"), React.createElement("div", undefined, "Match candidates to jobs based on their preferences"))), React.createElement("div", {
                              className: "page-content top-content"
                            }, React.createElement("div", {
                                  className: "input-pane top-pane"
                                }, React.createElement("div", {
                                      className: "splash-buttons"
                                    }, React.createElement("span", {
                                          className: "privacy-info"
                                        }, React.createElement("svg", {
                                              height: "24",
                                              width: "24",
                                              viewBox: "0 0 24 24",
                                              xmlns: "http://www.w3.org/2000/svg"
                                            }, React.createElement("path", {
                                                  d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                                                }), React.createElement("path", {
                                                  d: "M0 0h24v24H0z",
                                                  fill: "none"
                                                })), "The match runs in your browser.", React.createElement("br", undefined), "None of your data leaves your computer."), React.createElement("div", {
                                          className: "mdc-menu-anchor"
                                        }, React.createElement("button", {
                                              className: "mdc-button",
                                              onClick: (function (e) {
                                                  e.stopPropagation();
                                                  return Curry._1(self[/* send */3], /* OpenSampleMenu */0);
                                                })
                                            }, "Load Sample Data"), React.createElement("div", {
                                              className: "mdc-menu" + (
                                                match ? " mdc-menu--open" : ""
                                              ),
                                              tabIndex: -1
                                            }, React.createElement("ul", {
                                                  className: "mdc-menu__items mdc-list",
                                                  role: "menu"
                                                }, React.createElement("li", {
                                                      className: "mdc-list-item",
                                                      role: "menuitem",
                                                      tabIndex: 0,
                                                      onClick: Curry._1(self[/* handle */0], loadImperialInternships)
                                                    }, "Imperial Internships"), React.createElement("li", {
                                                      className: "mdc-list-item",
                                                      role: "menuitem",
                                                      tabIndex: 0,
                                                      onClick: Curry._1(self[/* handle */0], loadMarriageProposals)
                                                    }, "Stable Marriages")))))), React.createElement("div", {
                                  className: "input-pane"
                                }, React.createElement("div", {
                                      className: "names-question"
                                    }, React.createElement("span", {
                                          className: "leftpad"
                                        }), React.createElement("input", {
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
                                        }), React.createElement("div", {
                                          className: "mdc-switch"
                                        }, React.createElement("input", {
                                              className: "mdc-switch__native-control",
                                              id: "mutual-switch",
                                              role: "switch",
                                              checked: self[/* state */1][/* mutualMatch */3],
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
                                        }, "and vice versa"), React.createElement("span", {
                                          className: "rightpad"
                                        })), React.createElement("div", {
                                      className: "data-importers"
                                    }, ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectingRawData */6], state[/* selectingName */0], state[/* selectedName */1], state[/* selectingRowFormat */4], (function (rowFormat) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [rowFormat]));
                                              }), (function (rawData) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [rawData]));
                                              }), true, state[/* selectingIgnoredRowIndices */10], /* array */[])), ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectedRawData */7], state[/* selectedName */1], state[/* selectingName */0], state[/* selectedRowFormat */5], (function (rowFormat) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [rowFormat]));
                                              }), (function (rawData) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [rawData]));
                                              }), state[/* mutualMatch */3], state[/* selectedIgnoredRowIndices */11], /* array */[]))), React.createElement("div", {
                                      className: "bottom-buttons"
                                    }, React.createElement("button", {
                                          className: "mdc-button mdc-button--raised",
                                          disabled: List.length(self[/* state */1][/* selectingParsedData */8]) === 0 || List.length(self[/* state */1][/* selectedParsedData */9]) === 0,
                                          onClick: (function () {
                                              return Curry._1(self[/* send */3], /* MatchNow */2);
                                            })
                                        }, "Match now")))), React.createElement("div", {
                              className: "page-content"
                            }, React.createElement("div", {
                                  className: "graph-pane"
                                }, match$1 ? ReasonReact.element(/* None */0, /* None */0, Result.make(state, resultData, /* array */[])) : null)));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* selectingName */"candidates",
                      /* selectedName */"positions",
                      /* sampleMenuOpen */false,
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
                switch (action) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */true,
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult */state[/* matchResult */12]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult */state[/* matchResult */12]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult */RunMatch.runMatch(state)
                                ]]);
                  
                }
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */action[0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult */state[/* matchResult */12]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */action[0],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult */state[/* matchResult */12]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* mutualMatch */action[0],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData : array */[],
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData : [] */0,
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult : [] */0
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */action[0],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData : array */[],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData : [] */0,
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult : [] */0
                                ]]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */action[0],
                                  /* selectingRawData : array */[],
                                  /* selectedRawData */state[/* selectedRawData */7],
                                  /* selectingParsedData : [] */0,
                                  /* selectedParsedData */state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult : [] */0
                                ]]);
                  case 5 : 
                      var rawData = action[0];
                      var match = DataParser.parseData(rawData, state[/* selectingRowFormat */4], true);
                      var selectedNamesEntries = match[2];
                      var match$1 = !state[/* mutualMatch */3] && List.length(state[/* selectedParsedData */9]) === 0;
                      var match$2 = !state[/* mutualMatch */3] && List.length(state[/* selectedParsedData */9]) === 0;
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */rawData,
                                  /* selectedRawData */match$1 ? SampleData.sampleDataToRaw(state[/* selectedRowFormat */5], selectedNamesEntries) : state[/* selectedRawData */7],
                                  /* selectingParsedData */match[0],
                                  /* selectedParsedData */match$2 ? selectedNamesEntries : state[/* selectedParsedData */9],
                                  /* selectingIgnoredRowIndices */match[1],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */11],
                                  /* matchResult */state[/* matchResult */12]
                                ]]);
                  case 6 : 
                      var rawData$1 = action[0];
                      var match$3 = DataParser.parseData(rawData$1, state[/* selectedRowFormat */5], state[/* mutualMatch */3]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* mutualMatch */state[/* mutualMatch */3],
                                  /* selectingRowFormat */state[/* selectingRowFormat */4],
                                  /* selectedRowFormat */state[/* selectedRowFormat */5],
                                  /* selectingRawData */state[/* selectingRawData */6],
                                  /* selectedRawData */rawData$1,
                                  /* selectingParsedData */state[/* selectingParsedData */8],
                                  /* selectedParsedData */match$3[0],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */10],
                                  /* selectedIgnoredRowIndices */match$3[1],
                                  /* matchResult */state[/* matchResult */12]
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

var imperialPositions = SampleData.imperialPositions;

var imperialCandidates = SampleData.imperialCandidates;

var marriageMen = SampleData.marriageMen;

var marriageWomen = SampleData.marriageWomen;

var sampleDataToRaw = SampleData.sampleDataToRaw;

var rankSortedArray = RunMatch.rankSortedArray;

var popularManyToMany = RunMatch.popularManyToMany;

var minCostMaxFlow = RunMatch.minCostMaxFlow;

var shouldUsePopularManyToMany = RunMatch.shouldUsePopularManyToMany;

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
exports.imperialPositions = imperialPositions;
exports.imperialCandidates = imperialCandidates;
exports.marriageMen = marriageMen;
exports.marriageWomen = marriageWomen;
exports.sampleDataToRaw = sampleDataToRaw;
exports.rankSortedArray = rankSortedArray;
exports.popularManyToMany = popularManyToMany;
exports.minCostMaxFlow = minCostMaxFlow;
exports.shouldUsePopularManyToMany = shouldUsePopularManyToMany;
exports.runMatch = runMatch;
exports.component = component;
exports.make = make;
/*  Not a pure module */
