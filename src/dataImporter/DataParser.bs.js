'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var SharedTypes = require("../SharedTypes.bs.js");
var Belt_HashMapString = require("bs-platform/lib/js/belt_HashMapString.js");

function ifEmptyString(str, alt) {
  if (str === "") {
    return alt;
  } else {
    return str;
  }
}

function listToSet(l) {
  return Belt_Set.fromArray(Belt_List.toArray(l), SharedTypes.IntCmp);
}

function optString(optStr) {
  var ss = $$String.trim(Js_option.getWithDefault("", optStr));
  if (ss === "") {
    return /* None */0;
  } else {
    return /* Some */[ss];
  }
}

function optStringToOptInt(optStr) {
  if (optStr) {
    try {
      return /* Some */[Caml_format.caml_int_of_string(optStr[0])];
    }
    catch (exn){
      return /* None */0;
    }
  } else {
    return /* None */0;
  }
}

function parseSelectees(cols, rowFormat) {
  if (rowFormat) {
    var match = optString(Belt_Array.get(cols, 0));
    var match$1 = optStringToOptInt(Belt_Array.get(cols, 1));
    if (match && match$1) {
      return /* Some */[/* :: */[
                /* tuple */[
                  match[0],
                  match$1[0]
                ],
                /* [] */0
              ]];
    } else {
      return /* None */0;
    }
  } else {
    var __x = Belt_Array.mapWithIndex(cols.filter((function (s) {
                return $$String.trim(s) !== "";
              })), (function (i, sn) {
            return /* tuple */[
                    i,
                    sn
                  ];
          }));
    return Js_option.some(Belt_List.reverse(Belt_Array.reduce(__x, /* [] */0, (function (p, param) {
                          return /* :: */[
                                  /* tuple */[
                                    param[1],
                                    param[0] + 1 | 0
                                  ],
                                  p
                                ];
                        }))));
  }
}

function parseSingleRow(cols, hasSelectees, rowFormat) {
  var name = optString(Belt_Array.get(cols, 0));
  var canMatchWith = optStringToOptInt(optString(Belt_Array.get(cols, 1)));
  var selectees = hasSelectees ? parseSelectees(cols.slice(2), rowFormat) : /* Some */[/* [] */0];
  if (name && canMatchWith && selectees) {
    return /* Some */[/* tuple */[
              name[0],
              canMatchWith[0],
              selectees[0]
            ]];
  } else {
    return /* None */0;
  }
}

function parseData(rawData, rowFormat, hasSelectees) {
  var match;
  if (rowFormat) {
    var match$1 = Belt_Array.reduce(Belt_Array.mapWithIndex(rawData, (function (i, r) {
                return /* tuple */[
                        r,
                        i
                      ];
              })), /* tuple */[
          Belt_HashMapString.make(rawData.length),
          /* [] */0
        ], (function (param, param$1) {
            var allIgnoredRowIndices = param[1];
            var nameMap = param[0];
            var rowContent = parseSingleRow(param$1[0], hasSelectees, rowFormat);
            if (rowContent) {
              var match = rowContent[0];
              var name = match[0];
              var firstAndOnlySelectee = Belt_List.head(match[2]);
              var match$1 = Belt_HashMapString.get(nameMap, name);
              var previouslyFoundSelectedNames = match$1 ? match$1[0][/* selectedNames */2] : /* [] */0;
              var tmp;
              if (firstAndOnlySelectee) {
                var match$2 = firstAndOnlySelectee[0];
                tmp = /* :: */[
                  /* tuple */[
                    match$2[0],
                    match$2[1]
                  ],
                  previouslyFoundSelectedNames
                ];
              } else {
                tmp = previouslyFoundSelectedNames;
              }
              var entry_001 = /* canMatchWith */match[1];
              var entry = /* record */[
                /* name */name,
                entry_001,
                /* selectedNames */tmp
              ];
              Belt_HashMapString.set(nameMap, name, entry);
              return /* tuple */[
                      nameMap,
                      allIgnoredRowIndices
                    ];
            } else {
              return /* tuple */[
                      nameMap,
                      /* :: */[
                        param$1[1],
                        allIgnoredRowIndices
                      ]
                    ];
            }
          }));
    match = /* tuple */[
      Belt_List.fromArray(Belt_HashMapString.valuesToArray(match$1[0])),
      Belt_Set.fromArray(Belt_List.toArray(match$1[1]), SharedTypes.IntCmp)
    ];
  } else {
    var match$2 = Belt_Array.reduce(Belt_Array.mapWithIndex(rawData, (function (i, r) {
                return /* tuple */[
                        r,
                        i
                      ];
              })), /* tuple */[
          /* [] */0,
          /* [] */0
        ], (function (param, param$1) {
            var cols = param$1[0];
            var allIgnoredRowIndices = param[1];
            var allRows = param[0];
            var rowContent = parseSingleRow(cols, hasSelectees, rowFormat);
            if (rowContent) {
              var match = rowContent[0];
              Belt_Array.slice(cols, 2, cols.length);
              var entry_000 = /* name */match[0];
              var entry_001 = /* canMatchWith */match[1];
              var entry_002 = /* selectedNames */match[2];
              var entry = /* record */[
                entry_000,
                entry_001,
                entry_002
              ];
              return /* tuple */[
                      /* :: */[
                        entry,
                        allRows
                      ],
                      allIgnoredRowIndices
                    ];
            } else {
              return /* tuple */[
                      allRows,
                      /* :: */[
                        param$1[1],
                        allIgnoredRowIndices
                      ]
                    ];
            }
          }));
    match = /* tuple */[
      Belt_List.reverse(match$2[0]),
      Belt_Set.fromArray(Belt_List.toArray(match$2[1]), SharedTypes.IntCmp)
    ];
  }
  var sideDataEntries = match[0];
  var selectedNamesEntries = Belt_List.map(Belt_List.fromArray(Belt_HashMapString.keysToArray(Belt_HashMapString.fromArray(Belt_List.toArray(Belt_List.map(Belt_List.reduce(sideDataEntries, /* [] */0, (function (selectedNameList, entry) {
                                  return Belt_List.concat(selectedNameList, entry[/* selectedNames */2]);
                                })), (function (param) {
                              return /* tuple */[
                                      param[0],
                                      true
                                    ];
                            })))))), (function (name) {
          return /* record */[
                  /* name */name,
                  /* canMatchWith */1,
                  /* selectedNames : [] */0
                ];
        }));
  return /* tuple */[
          sideDataEntries,
          match[1],
          selectedNamesEntries
        ];
}

exports.ifEmptyString = ifEmptyString;
exports.listToSet = listToSet;
exports.optString = optString;
exports.optStringToOptInt = optStringToOptInt;
exports.parseSelectees = parseSelectees;
exports.parseSingleRow = parseSingleRow;
exports.parseData = parseData;
/* SharedTypes Not a pure module */
