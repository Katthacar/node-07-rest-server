'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config/config');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

var connection = _mongoose2.default.connection;

connection.once('open', function () {
  return console.log('Database Connected successful!');
}).on('error', function (error) {
  return console.log('ERROR => ' + error);
});

exports.default = connection;