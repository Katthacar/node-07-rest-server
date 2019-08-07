'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _login = require('./../controllers/login.ctrl');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginRouter = (0, _express.Router)();

loginRouter.route('/login').post(_login2.default.login);

exports.default = loginRouter;