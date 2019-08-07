'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authentication = require('../middlewares/authentication');

var categoryRouter = (0, _express.Router)();

categoryRouter.route('/');

exports.default = categoryRouter;