'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var HotTable = require("./HotTable.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Pluralize = require("pluralize");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SharedTypes = require("../SharedTypes.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var applyChanges = (
    function(oldRawArray, changes, maxCols) {
      const newRawArray = oldRawArray.slice();
      const maxNewRowCols = Math.min(maxCols, 4);
      for (const [row, col, oldVal, newVal] of changes) {
        if (newVal) {
          if (newRawArray[row] === undefined || newRawArray[row] === null) {
            newRawArray[row] = new Array(maxNewRowCols).fill("");
          }
          newRawArray[row][col] = newVal;
        }
      }
      /* make sure every undefined row is filled with empty strings */
      for (let i = 0; i < newRawArray.length; i++) {
        if (!newRawArray[i]) {
          newRawArray[i] = new Array(maxNewRowCols).fill("");
        } else {
          for (let j = 0; j < newRawArray[i].length; j++) {
            if (newRawArray[i][j] === null) {
              newRawArray[i][j] = "";
            }
          }
        }
      }
      return newRawArray;
     }
  );

var component = ReasonReact.reducerComponent("SideDataImporter");

function make(rawData, selectingName, selectedName, rowFormat, updateRowFormat, updateRawData, includeSelectees, ignoredRowIndices, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */(function (param) {
              var newSelf = param[/* newSelf */1];
              var oldSelf = param[/* oldSelf */0];
              var newRawData = oldSelf[/* state */1][/* prevRawData */0][0] !== rawData;
              var newSelectingName = oldSelf[/* state */1][/* prevSelectingName */1][0] !== selectingName;
              var newSelectedName = oldSelf[/* state */1][/* prevSelectedName */2][0] !== selectedName;
              var newRowFormat = oldSelf[/* state */1][/* prevRowFormat */3][0] !== rowFormat;
              var newIncludeSelectees = oldSelf[/* state */1][/* prevIncludeSelectees */4][0] !== includeSelectees;
              var newIgnoredRowIndices = oldSelf[/* state */1][/* prevIgnoredRowIndices */5][0] !== ignoredRowIndices;
              newSelf[/* state */1][/* prevRawData */0][0] = rawData;
              newSelf[/* state */1][/* prevSelectingName */1][0] = selectingName;
              newSelf[/* state */1][/* prevSelectedName */2][0] = selectedName;
              newSelf[/* state */1][/* prevRowFormat */3][0] = rowFormat;
              newSelf[/* state */1][/* prevIgnoredRowIndices */5][0] = ignoredRowIndices;
              newSelf[/* state */1][/* prevIncludeSelectees */4][0] = includeSelectees;
              if (newRawData || newSelectedName || newSelectingName || newRowFormat || newIgnoredRowIndices) {
                return true;
              } else {
                return newIncludeSelectees;
              }
            }),
          /* render */(function () {
              var tmp;
              if (includeSelectees) {
                var match = rowFormat === /* SelectedInMultipleRows */1;
                tmp = match ? 2 : 10000;
              } else {
                tmp = 0;
              }
              var maxCols = 2 + tmp | 0;
              var minCols = Belt_Array.reduce(rawData, 0, (function (p, c) {
                      var clength = c.length;
                      var match = clength > p;
                      if (match) {
                        return clength;
                      } else {
                        return p;
                      }
                    }));
              var selectedHeader = function (index) {
                if (rowFormat === /* SelectedInMultipleRows */1) {
                  var match = index === 0;
                  if (match) {
                    return selectedName;
                  } else {
                    return "Rank";
                  }
                } else {
                  return Pluralize.singular(selectedName) + (" ranked #" + String(index + 1 | 0));
                }
              };
              var columnHeader = function (index) {
                if (index !== 0) {
                  if (index !== 1) {
                    return $$String.capitalize(Pluralize.singular(selectedHeader(index - 2 | 0)));
                  } else {
                    return "Can match with<br /> how many " + selectedName;
                  }
                } else {
                  return $$String.capitalize(selectingName);
                }
              };
              var rowHeaders = function (index) {
                var match = Belt_Set.has(ignoredRowIndices, index);
                var match$1 = Belt_Set.has(ignoredRowIndices, index);
                return "<span class=\"" + ((
                          match ? "ignored-row" : ""
                        ) + ("\" title=\"" + ((
                              match$1 ? "Row has errors and will be ignored" : ""
                            ) + ("\">" + (String(index + 1 | 0) + "</span>")))));
              };
              var changeHandler = function (changes, source) {
                if (source !== "loadData") {
                  return Curry._1(updateRawData, Curry._3(applyChanges, rawData, changes, maxCols));
                } else {
                  return 0;
                }
              };
              var match$1 = rowFormat === /* SelectedInColumns */0;
              var match$2 = maxCols > 30;
              var match$3 = rawData.length > 0 && Js_option.getWithDefault(/* array */[], Belt_Array.get(rawData, 0)).length > 5;
              var match$4 = rawData.length > 0;
              var tmp$1;
              if (includeSelectees) {
                var match$5 = rowFormat === /* SelectedInMultipleRows */1;
                tmp$1 = React.createElement("div", {
                      className: "material-select"
                    }, React.createElement("span", undefined, "Table format"), React.createElement("select", {
                          value: match$5 ? "multiple-rows" : "columns",
                          onChange: (function (_event) {
                              var value = _event.target.value;
                              var tmp;
                              switch (value) {
                                case "" : 
                                case "columns" : 
                                    tmp = /* SelectedInColumns */0;
                                    break;
                                case "multiple-rows" : 
                                    tmp = /* SelectedInMultipleRows */1;
                                    break;
                                default:
                                  throw [
                                        Caml_builtin_exceptions.match_failure,
                                        [
                                          "SideDataImporter.re",
                                          177,
                                          22
                                        ]
                                      ];
                              }
                              return Curry._1(updateRowFormat, tmp);
                            })
                        }, React.createElement("option", {
                              value: "multiple-rows"
                            }, "One " + (Pluralize.singular(selectedName) + " per row")), React.createElement("option", {
                              value: "columns"
                            }, selectedName + " in columns")));
              } else {
                tmp$1 = null;
              }
              return React.createElement("div", {
                          className: "data-importer"
                        }, React.createElement("div", {
                              className: "question-statement"
                            }, "Paste your " + (selectingName + " into the spreadsheet below:")), ReasonReact.element(/* None */0, /* None */0, HotTable.make({
                                  colHeaders: columnHeader,
                                  rowHeaders: rowHeaders,
                                  copyPaste: true,
                                  width: "100%",
                                  minSpareRows: 1,
                                  startRows: 30,
                                  minCols: match$1 ? minCols + 1 | 0 : minCols,
                                  maxCols: maxCols,
                                  startColumns: match$2 ? 30 : maxCols,
                                  stretchH: match$3 ? "none" : "all",
                                  data: match$4 ? rawData : null,
                                  onAfterChange: changeHandler
                                }, /* array */[])), React.createElement("div", {
                              className: "rowformat-selector"
                            }, tmp$1, React.createElement("button", {
                                  className: "mdc-button clear-button",
                                  onClick: (function () {
                                      return Curry._1(updateRawData, /* array */[]);
                                    })
                                }, "Clear")));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* prevRawData */[rawData],
                      /* prevSelectingName */[selectingName],
                      /* prevSelectedName */[selectedName],
                      /* prevRowFormat */[rowFormat],
                      /* prevIncludeSelectees */[includeSelectees],
                      /* prevIgnoredRowIndices */[ignoredRowIndices]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, state) {
              return /* Update */Block.__(0, [state]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var IntCmp = SharedTypes.IntCmp;

var StrCmp = SharedTypes.StrCmp;

var PairingCmp = SharedTypes.PairingCmp;

var OptIntCmp = SharedTypes.OptIntCmp;

exports.IntCmp = IntCmp;
exports.StrCmp = StrCmp;
exports.PairingCmp = PairingCmp;
exports.OptIntCmp = OptIntCmp;
exports.applyChanges = applyChanges;
exports.component = component;
exports.make = make;
/* applyChanges Not a pure module */
