'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Belt_HashMapString = require("bs-platform/lib/js/belt_HashMapString.js");

function parseData(rawData, rowFormat) {
  var sideDataEntries = rowFormat ? Belt_List.fromArray(Belt_HashMapString.valuesToArray(Belt_Array.reduce(rawData, Belt_HashMapString.make(rawData.length), (function (nameMap, cols) {
                    if (cols.length >= 2) {
                      var name = Js_option.getWithDefault("", Belt_Array.get(cols, 0));
                      var canMatchWith = Js_option.getWithDefault("1", Belt_Array.get(cols, 1));
                      var selectedName = Js_option.getWithDefault("", Belt_Array.get(cols, 2));
                      var rank = Js_option.getWithDefault("1", Belt_Array.get(cols, 3));
                      var match = Belt_HashMapString.get(nameMap, name);
                      var previouslyFoundSelectedNames = match ? match[0][/* selectedNames */2] : /* [] */0;
                      var entry_000 = /* name */$$String.trim(name);
                      var entry_001 = /* canMatchWith */Caml_format.caml_int_of_string(canMatchWith);
                      var entry_002 = /* selectedNames */selectedName !== "" ? /* :: */[
                          /* tuple */[
                            selectedName,
                            Caml_format.caml_int_of_string(rank)
                          ],
                          previouslyFoundSelectedNames
                        ] : previouslyFoundSelectedNames;
                      var entry = /* record */[
                        entry_000,
                        entry_001,
                        entry_002
                      ];
                      Belt_HashMapString.set(nameMap, name, entry);
                      return nameMap;
                    } else {
                      return nameMap;
                    }
                  })))) : Belt_List.reverse(Belt_Array.reduce(rawData, /* [] */0, (function (allRows, cols) {
                if (cols.length >= 2) {
                  var name = Js_option.getWithDefault("", Belt_Array.get(cols, 0));
                  var canMatchWith = Js_option.getWithDefault("1", Belt_Array.get(cols, 1));
                  var selectedNames = Belt_Array.slice(cols, 2, cols.length);
                  var __x = Belt_List.mapWithIndex(Belt_List.fromArray(selectedNames), (function (i, sn) {
                          return /* tuple */[
                                  i,
                                  sn
                                ];
                        }));
                  var entry_000 = /* name */$$String.trim(name);
                  var entry_001 = /* canMatchWith */Caml_format.caml_int_of_string(canMatchWith);
                  var entry_002 = /* selectedNames */Belt_List.reverse(Belt_List.reduce(__x, /* [] */0, (function (p, param) {
                              return /* :: */[
                                      /* tuple */[
                                        param[1],
                                        param[0] + 1 | 0
                                      ],
                                      p
                                    ];
                            })));
                  var entry = /* record */[
                    entry_000,
                    entry_001,
                    entry_002
                  ];
                  return /* :: */[
                          entry,
                          allRows
                        ];
                } else {
                  return allRows;
                }
              })));
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
          selectedNamesEntries
        ];
}

exports.parseData = parseData;
/* No side effect */
