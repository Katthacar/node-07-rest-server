'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// parse application/json
app.use(_bodyParser2.default.json());
// use cors for cross-origin
app.use((0, _cors2.default)());

exports.default = app;