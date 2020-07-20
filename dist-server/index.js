"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dburl = "mongodb+srv://nguyendangdu2001:yasuo123@cluster0-hhly3.mongodb.net/Bwd2020?retryWrites=true&w=majority";

_mongoose["default"].connect(dburl, function () {
  if (err) throw err;
  console.log("conncected");
});