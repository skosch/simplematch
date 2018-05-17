'use strict';

var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

var cmp = Caml_obj.caml_compare;

var IntCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp]);

var cmp$1 = Caml_obj.caml_compare;

var OptIntCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$1]);

exports.IntCmp = IntCmp;
exports.OptIntCmp = OptIntCmp;
/* IntCmp Not a pure module */
