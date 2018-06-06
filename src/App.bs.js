'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Result = require("./result/Result.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var RunMatch = require("./matching/RunMatch.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var DataParser = require("./dataImporter/DataParser.bs.js");
var SampleData = require("./dataImporter/SampleData.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SharedTypes = require("./SharedTypes.bs.js");
var SideDataImporter = require("./dataImporter/SideDataImporter.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

((require('./styles.scss')));

((require('../node_modules/@material/switch/mdc-switch.scss')));

((require('../node_modules/@material/button/mdc-button.scss')));

((require('../node_modules/@material/menu/mdc-menu.scss')));

((require('../node_modules/@material/dialog/mdc-dialog.scss')));

var component = ReasonReact.reducerComponent("App");

function make() {
  var loadImperialInternships = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, ["Applicants"]));
    Curry._1(self[/* send */3], /* UpdateSelectedName */Block.__(1, ["Internships"]));
    Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [/* SelectedInMultipleRows */1]));
    Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [/* SelectedInMultipleRows */1]));
    Curry._1(self[/* send */3], /* UpdateMutualMatch */Block.__(2, [true]));
    Curry._1(self[/* send */3], /* UpdateMatchStrategy */Block.__(7, [/* MCMF */2]));
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(/* SelectedInMultipleRows */1, SampleData.imperialCandidates)]));
    return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(/* SelectedInMultipleRows */1, SampleData.imperialPositions)]));
  };
  var loadMarriageProposals = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, ["Men"]));
    Curry._1(self[/* send */3], /* UpdateSelectedName */Block.__(1, ["Women"]));
    Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [/* SelectedInColumns */0]));
    Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [/* SelectedInColumns */0]));
    Curry._1(self[/* send */3], /* UpdateMutualMatch */Block.__(2, [true]));
    Curry._1(self[/* send */3], /* UpdateMatchStrategy */Block.__(7, [/* SelectingBreakTies */0]));
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(/* SelectedInColumns */0, SampleData.marriageMen)]));
    return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(/* SelectedInColumns */0, SampleData.marriageWomen)]));
  };
  var loadResidencies = function (_, self) {
    Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, ["Residents"]));
    Curry._1(self[/* send */3], /* UpdateSelectedName */Block.__(1, ["Hospitals"]));
    Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [/* SelectedInMultipleRows */1]));
    Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [/* SelectedInMultipleRows */1]));
    Curry._1(self[/* send */3], /* UpdateMutualMatch */Block.__(2, [false]));
    Curry._1(self[/* send */3], /* UpdateMatchStrategy */Block.__(7, [/* MCMF */2]));
    Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [SampleData.sampleDataToRaw(/* SelectedInMultipleRows */1, SampleData.residents)]));
    return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [SampleData.sampleDataToRaw(/* SelectedInMultipleRows */1, SampleData.hospitals)]));
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
              var resultData = Belt_List.toArray(self[/* state */1][/* matchResult */14]);
              var match = state[/* sampleMenuOpen */2];
              var match$1 = state[/* matchStrategy */5];
              var tmp;
              switch (match$1) {
                case 0 : 
                    tmp = "selecting-break-ties";
                    break;
                case 1 : 
                    tmp = "selected-break-ties";
                    break;
                case 2 : 
                    tmp = "mcmf";
                    break;
                
              }
              var match$2 = List.length(self[/* state */1][/* matchResult */14]) > 0;
              var match$3 = state[/* infoBoxOpen */3];
              return React.createElement("div", {
                          onClick: (function () {
                              return Curry._1(self[/* send */3], /* CloseSampleMenu */2);
                            })
                        }, React.createElement("div", {
                              className: "splash"
                            }, React.createElement("div", {
                                  className: "plank-logo"
                                }, "Plank"), React.createElement("div", {
                                  className: "splash-content"
                                }, React.createElement("h1", undefined, "SimpleMatch"), React.createElement("div", undefined, "Finds the best match from rank lists in seconds"))), React.createElement("div", {
                              className: "page-content top-content"
                            }, React.createElement("div", {
                                  className: "input-pane"
                                }, React.createElement("div", {
                                      className: "names-question"
                                    }, React.createElement("div", {
                                          className: "mdc-menu-anchor"
                                        }, React.createElement("button", {
                                              className: "mdc-button",
                                              onClick: (function (e) {
                                                  e.stopPropagation();
                                                  return Curry._1(self[/* send */3], /* OpenSampleMenu */1);
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
                                                      tabIndex: 1,
                                                      onClick: Curry._1(self[/* handle */0], loadMarriageProposals)
                                                    }, "Marriage Matchmaking"), React.createElement("li", {
                                                      className: "mdc-list-item",
                                                      role: "menuitem",
                                                      tabIndex: 2,
                                                      onClick: Curry._1(self[/* handle */0], loadResidencies)
                                                    }, "Rewarding Residencies")))), React.createElement("span", {
                                          className: "leftpad"
                                        }), React.createElement("input", {
                                          type: "text",
                                          value: self[/* state */1][/* selectingName */0],
                                          onChange: (function (_event) {
                                              return Curry._1(self[/* send */3], /* UpdateSelectingName */Block.__(0, [_event.target.value]));
                                            })
                                        }), React.createElement("span", undefined, " have ranked "), React.createElement("input", {
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
                                              checked: self[/* state */1][/* mutualMatch */4],
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
                                    }, ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectingRawData */8], state[/* selectingName */0], state[/* selectedName */1], state[/* selectingRowFormat */6], (function (rowFormat) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectingRowFormat */Block.__(3, [rowFormat]));
                                              }), (function (rawData) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectingRawData */Block.__(5, [rawData]));
                                              }), (function () {
                                                return /* () */0;
                                              }), true, state[/* selectingIgnoredRowIndices */12], /* array */[])), ReasonReact.element(/* None */0, /* None */0, SideDataImporter.make(state[/* selectedRawData */9], state[/* selectedName */1], state[/* selectingName */0], state[/* selectedRowFormat */7], (function (rowFormat) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectedRowFormat */Block.__(4, [rowFormat]));
                                              }), (function (rawData) {
                                                return Curry._1(self[/* send */3], /* UpdateSelectedRawData */Block.__(6, [rawData]));
                                              }), (function () {
                                                return Curry._1(self[/* send */3], /* AutofillSelected */0);
                                              }), state[/* mutualMatch */4], state[/* selectedIgnoredRowIndices */13], /* array */[]))), React.createElement("div", {
                                      className: "bottom-buttons"
                                    }, React.createElement("span", {
                                          className: "privacy-info"
                                        }, "The match runs in your browser.", React.createElement("br", undefined), "None of your data leaves your computer."), React.createElement("span", undefined, React.createElement("div", {
                                              className: "material-select"
                                            }, React.createElement("span", undefined, "Matching strategy"), React.createElement("select", {
                                                  disabled: !state[/* mutualMatch */4],
                                                  value: tmp,
                                                  onChange: (function (_event) {
                                                      var value = _event.target.value;
                                                      var matchStrategy;
                                                      switch (value) {
                                                        case "" : 
                                                        case "*" : 
                                                        case "mcmf" : 
                                                            matchStrategy = /* MCMF */2;
                                                            break;
                                                        case "selected-break-ties" : 
                                                            matchStrategy = /* SelectedBreakTies */1;
                                                            break;
                                                        case "selecting-break-ties" : 
                                                            matchStrategy = /* SelectingBreakTies */0;
                                                            break;
                                                        default:
                                                          throw [
                                                                Caml_builtin_exceptions.match_failure,
                                                                [
                                                                  "App.re",
                                                                  385,
                                                                  26
                                                                ]
                                                              ];
                                                      }
                                                      return Curry._1(self[/* send */3], /* UpdateMatchStrategy */Block.__(7, [matchStrategy]));
                                                    })
                                                }, React.createElement("option", {
                                                      value: "mcmf"
                                                    }, "Maximal matching"), React.createElement("option", {
                                                      value: "selecting-break-ties"
                                                    }, "Popular matching, " + ($$String.uncapitalize(state[/* selectingName */0]) + " decide ties")), React.createElement("option", {
                                                      value: "selected-break-ties"
                                                    }, "Popular matching, " + ($$String.uncapitalize(state[/* selectedName */1]) + " decide ties")))), React.createElement("span", {
                                              className: "info-link",
                                              onClick: (function () {
                                                  return Curry._1(self[/* send */3], /* OpenInfoBox */3);
                                                })
                                            }, "(what is this?)")), React.createElement("button", {
                                          className: "mdc-button mdc-button--raised",
                                          disabled: List.length(self[/* state */1][/* selectingParsedData */10]) === 0 || List.length(self[/* state */1][/* selectedParsedData */11]) === 0,
                                          onClick: (function () {
                                              return Curry._1(self[/* send */3], /* MatchNow */5);
                                            })
                                        }, "Match now")))), React.createElement("div", {
                              className: "page-content"
                            }, React.createElement("div", {
                                  className: "graph-pane"
                                }, match$2 ? ReasonReact.element(/* None */0, /* None */0, Result.make(state, resultData, /* array */[])) : null)), React.createElement("aside", {
                              className: "mdc-dialog",
                              id: "my-mdc-dialog",
                              role: "alertdialog",
                              style: {
                                visibility: match$3 ? "visible" : "hidden"
                              }
                            }, React.createElement("div", {
                                  className: "mdc-dialog__surface"
                                }, React.createElement("header", {
                                      className: "mdc-dialog__header"
                                    }, React.createElement("h2", {
                                          className: "mdc-dialog__header__title",
                                          id: "my-mdc-dialog-label"
                                        }, "Matching strategy")), React.createElement("section", {
                                      className: "mdc-dialog__body",
                                      id: "my-mdc-dialog-description"
                                    }, React.createElement("h3", undefined, "Maximal matching"), React.createElement("p", undefined, "This strategy will always find the maximum possible number of matches, while taking\npreferences into account (it minimizes the sum of the ranks of all matches)."), React.createElement("p", undefined, "This strategy may find more matches than the ", React.createElement("em", undefined, "Popular matching"), " strategy, but may include more matches that are less preferred."), React.createElement("p", undefined, "For more details, please see ", React.createElement("a", {
                                              href: "https://en.wikipedia.org/wiki/Minimum-cost_flow_problem#Minimum_weight_bipartite_matching"
                                            }, "minimum-weight bipartite matching"), "."), React.createElement("br", undefined), React.createElement("h3", undefined, "Popular matching"), React.createElement("p", undefined, "A popular matching is one that tries to maximize overall satisfaction.\n                     While the algorithm will try to find as many matches as possible,\n                     it will not do so unconditionally. Under one-on-one conditions, this typically results in a ", React.createElement("a", {
                                              href: "https://en.wikipedia.org/wiki/Stable_marriage_problem"
                                            }, "stable matching"), "."), React.createElement("p", undefined, "When two different matchings would be equally popular, the rank lists of either " + ($$String.uncapitalize(state[/* selectingName */0]) + (" or " + ($$String.uncapitalize(state[/* selectedName */1]) + " can be used to break ties.")))), React.createElement("p", undefined, "For an in-depth explanation, please see ", React.createElement("a", {
                                              href: "https://arxiv.org/abs/1609.07531"
                                            }, "the original article describing the algorithm.")), React.createElement("p", undefined, "This strategy does not apply when only one side is ranking the other.")), React.createElement("footer", {
                                      className: "mdc-dialog__footer"
                                    }, React.createElement("button", {
                                          className: "mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept",
                                          type: "button",
                                          onClick: (function () {
                                              return Curry._1(self[/* send */3], /* CloseInfoBox */4);
                                            })
                                        }, "Close"))), React.createElement("div", {
                                  className: "mdc-dialog__backdrop"
                                })));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* selectingName */"candidates",
                      /* selectedName */"positions",
                      /* sampleMenuOpen */false,
                      /* infoBoxOpen */false,
                      /* mutualMatch */false,
                      /* matchStrategy : MCMF */2,
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
                      var match = DataParser.parseData(state[/* selectingRawData */8], state[/* selectingRowFormat */6], true);
                      var selectedNamesEntries = match[2];
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */SampleData.sampleDataToRaw(state[/* selectedRowFormat */7], selectedNamesEntries),
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */selectedNamesEntries,
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */true,
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 2 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */true,
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */false,
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 5 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
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
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 1 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */action[0],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 2 : 
                      var mutualMatch = action[0];
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */mutualMatch,
                                  /* matchStrategy */mutualMatch ? state[/* matchStrategy */5] : /* MCMF */2,
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData : array */[],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData : [] */0,
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult : [] */0
                                ]]);
                  case 3 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */action[0],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData : array */[],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData : [] */0,
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult : [] */0
                                ]]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */state[/* matchStrategy */5],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */action[0],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData : array */[],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData : [] */0,
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult : [] */0
                                ]]);
                  case 5 : 
                      var rawData = action[0];
                      var match$1 = DataParser.parseData(rawData, state[/* selectingRowFormat */6], true);
                      var selectedNamesEntries$1 = match$1[2];
                      var parsedData = match$1[0];
                      var match$2 = !state[/* mutualMatch */4] && List.length(state[/* selectedParsedData */11]) === 0;
                      var selectedParsedData = match$2 ? selectedNamesEntries$1 : state[/* selectedParsedData */11];
                      var match$3 = !state[/* mutualMatch */4] && List.length(state[/* selectedParsedData */11]) === 0;
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */RunMatch.suggestStrategy(parsedData, selectedParsedData, state[/* mutualMatch */4]),
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */rawData,
                                  /* selectedRawData */match$3 ? SampleData.sampleDataToRaw(state[/* selectedRowFormat */7], selectedNamesEntries$1) : state[/* selectedRawData */9],
                                  /* selectingParsedData */parsedData,
                                  /* selectedParsedData */selectedParsedData,
                                  /* selectingIgnoredRowIndices */match$1[1],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 6 : 
                      var rawData$1 = action[0];
                      var match$4 = DataParser.parseData(rawData$1, state[/* selectedRowFormat */7], state[/* mutualMatch */4]);
                      var parsedData$1 = match$4[0];
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */false,
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */RunMatch.suggestStrategy(state[/* selectingParsedData */10], parsedData$1, state[/* mutualMatch */4]),
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */rawData$1,
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */parsedData$1,
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */match$4[1],
                                  /* matchResult */state[/* matchResult */14]
                                ]]);
                  case 7 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* selectingName */state[/* selectingName */0],
                                  /* selectedName */state[/* selectedName */1],
                                  /* sampleMenuOpen */state[/* sampleMenuOpen */2],
                                  /* infoBoxOpen */state[/* infoBoxOpen */3],
                                  /* mutualMatch */state[/* mutualMatch */4],
                                  /* matchStrategy */action[0],
                                  /* selectingRowFormat */state[/* selectingRowFormat */6],
                                  /* selectedRowFormat */state[/* selectedRowFormat */7],
                                  /* selectingRawData */state[/* selectingRawData */8],
                                  /* selectedRawData */state[/* selectedRawData */9],
                                  /* selectingParsedData */state[/* selectingParsedData */10],
                                  /* selectedParsedData */state[/* selectedParsedData */11],
                                  /* selectingIgnoredRowIndices */state[/* selectingIgnoredRowIndices */12],
                                  /* selectedIgnoredRowIndices */state[/* selectedIgnoredRowIndices */13],
                                  /* matchResult */state[/* matchResult */14]
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

var StrCmp = SampleData.StrCmp;

var PairingCmp = SampleData.PairingCmp;

var OptIntCmp = SampleData.OptIntCmp;

var imperialPositions = SampleData.imperialPositions;

var imperialCandidates = SampleData.imperialCandidates;

var marriageMen = SampleData.marriageMen;

var marriageWomen = SampleData.marriageWomen;

var residents = SampleData.residents;

var hospitals = SampleData.hospitals;

var sampleDataToRaw = SampleData.sampleDataToRaw;

var rankSortedArray = RunMatch.rankSortedArray;

var popularManyToMany = RunMatch.popularManyToMany;

var minCostMaxFlow = RunMatch.minCostMaxFlow;

var suggestStrategy = RunMatch.suggestStrategy;

var runMatch = RunMatch.runMatch;

exports.ifEmptyString = ifEmptyString;
exports.listToSet = listToSet;
exports.optString = optString;
exports.optStringToOptInt = optStringToOptInt;
exports.parseSelectees = parseSelectees;
exports.parseSingleRow = parseSingleRow;
exports.parseData = parseData;
exports.IntCmp = IntCmp;
exports.StrCmp = StrCmp;
exports.PairingCmp = PairingCmp;
exports.OptIntCmp = OptIntCmp;
exports.imperialPositions = imperialPositions;
exports.imperialCandidates = imperialCandidates;
exports.marriageMen = marriageMen;
exports.marriageWomen = marriageWomen;
exports.residents = residents;
exports.hospitals = hospitals;
exports.sampleDataToRaw = sampleDataToRaw;
exports.rankSortedArray = rankSortedArray;
exports.popularManyToMany = popularManyToMany;
exports.minCostMaxFlow = minCostMaxFlow;
exports.suggestStrategy = suggestStrategy;
exports.runMatch = runMatch;
exports.component = component;
exports.make = make;
/*  Not a pure module */
