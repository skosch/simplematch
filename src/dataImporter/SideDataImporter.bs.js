'use strict';

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

var component = ReasonReact.statelessComponent("SideDataImporter");

function make(rawData, selectingName, selectedName, rowFormat, updateRowFormat, updateRawData, includeSelectees, ignoredRowIndices, _) {
  var tmp;
  if (includeSelectees) {
    var match = rowFormat === /* SelectedInMultipleRows */1;
    tmp = match ? 2 : 10000;
  } else {
    tmp = 0;
  }
  var maxCols = 2 + tmp | 0;
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
        return "Can match<br />with " + selectedName;
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
              var match = maxCols > 30;
              var match$1 = rawData.length > 0 && Js_option.getWithDefault(/* array */[], Belt_Array.get(rawData, 0)).length > 5;
              var match$2 = rawData.length > 0;
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
                                  maxCols: maxCols,
                                  startColumns: match ? 30 : maxCols,
                                  stretchH: match$1 ? "none" : "all",
                                  data: match$2 ? rawData : null,
                                  onAfterChange: changeHandler
                                }, /* array */[])), React.createElement("div", {
                              className: "rowformat-selector"
                            }, includeSelectees ? React.createElement("span", undefined, "Format: ", React.createElement("select", {
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
                                                        128,
                                                        24
                                                      ]
                                                    ];
                                            }
                                            return Curry._1(updateRowFormat, tmp);
                                          })
                                      }, React.createElement("option", {
                                            value: "multiple-rows"
                                          }, "One " + (Pluralize.singular(selectedName) + " per row")), React.createElement("option", {
                                            value: "columns"
                                          }, selectedName + " in columns"))) : null, React.createElement("button", {
                                  className: "mdc-button clear-button",
                                  onClick: (function () {
                                      return Curry._1(updateRawData, /* array */[]);
                                    })
                                }, "Clear")));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var IntCmp = SharedTypes.IntCmp;

var OptIntCmp = SharedTypes.OptIntCmp;

exports.IntCmp = IntCmp;
exports.OptIntCmp = OptIntCmp;
exports.applyChanges = applyChanges;
exports.component = component;
exports.make = make;
/* applyChanges Not a pure module */
