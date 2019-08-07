'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _login = require('./login.routes');

var _login2 = _interopRequireDefault(_login);

var _user = require('./user.routes');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use(_login2.default);
router.use(_user2.default);

exports.default = router;