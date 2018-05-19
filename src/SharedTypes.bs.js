'use strict';

var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

var cmp = Caml_obj.caml_compare;

var IntCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp]);

var cmp$1 = Caml_obj.caml_compare;

var StrCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$1]);

var cmp$2 = Caml_obj.caml_compare;

var PairingCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$2]);

var cmp$3 = Caml_obj.caml_compare;

var OptIntCmp = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$3]);

exports.IntCmp = IntCmp;
exports.StrCmp = StrCmp;
exports.PairingCmp = PairingCmp;
exports.OptIntCmp = OptIntCmp;
/* IntCmp Not a pure module */
