'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = exports.TOKEN_SEED = exports.TOKEN_EXPIRATION = exports.NODE_ENV = exports.PORT = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

/**
 * PORT
 */
process.env.PORT = process.env.PORT || 3000;
var PORT = exports.PORT = process.env.PORT;

/**
 * ENVIRONMENT
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var NODE_ENV = exports.NODE_ENV = process.env.NODE_ENV;

/**
 * EXPIRES TOKEN
 */
// 60 * 60 * 24 * 30
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30;
var TOKEN_EXPIRATION = exports.TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;

/**
 * SEED TOKEN
 */
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'secret';
var TOKEN_SEED = exports.TOKEN_SEED = process.env.TOKEN_SEED;

/**
 * DATA BASE
 */
var MONGODB_URI = exports.MONGODB_URI = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/cafe' : process.env.MONGODB_URI;
process.env.MONGODB_URI = MONGODB_URI;