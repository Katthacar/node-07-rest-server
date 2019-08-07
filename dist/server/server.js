'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config/config');

var _bodyParser = require('./middlewares/bodyParser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

/**
 * SETTINGS
 */
server.set('port', _config.PORT);

/**
 * MIDDLEWARES
 */
server.use(_bodyParser2.default);

/**
 * ROUTES
 */
server.use('/rest-server/api', _routes2.default);

exports.default = server;