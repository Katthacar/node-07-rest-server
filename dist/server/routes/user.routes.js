'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authentication = require('../middlewares/authentication');

var _user = require('./../controllers/user.ctrl');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = (0, _express.Router)();

userRouter.route('/users').get(_authentication.validToken, _user2.default.getUsers).post([_authentication.validToken, _authentication.validAdminRole], _user2.default.createUser);

userRouter.route('/users/:id').put([_authentication.validToken, _authentication.validAdminRole], _user2.default.updateUserById).delete([_authentication.validToken, _authentication.validAdminRole], _user2.default.deleteUserById);

exports.default = userRouter;