'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validAdminRole = exports.validToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('./../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Valid TOKEN
 */
var validToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, payload;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.get('Authorization');
            _context.prev = 1;
            _context.next = 4;
            return _jsonwebtoken2.default.verify(token, _config.TOKEN_SEED);

          case 4:
            payload = _context.sent;

            req.user = payload.user;
            next();
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](1);

            res.status(401).json({ status: 'error', error: { name: 'JsonWebTokenError', message: 'JWT debe ser proveído' } });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 9]]);
  }));

  return function validToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Valid ADMIN_ROLE
 */
var validAdminRole = function validAdminRole(req, res, next) {
  var user = req.user;
  if (user.role !== 'ADMIN_ROLE') {
    return res.status(401).json({
      status: 'error',
      error: {
        message: 'Usuario no autorizado'
      }
    });
  } else next();
};

exports.validToken = validToken;
exports.validAdminRole = validAdminRole;