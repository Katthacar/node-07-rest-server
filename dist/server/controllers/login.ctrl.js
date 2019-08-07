'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('./../config/config');

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var loginCtrl = {};

loginCtrl.login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var body, dbUser, passwordMatch, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = req.body;
            dbUser = void 0;
            _context.prev = 2;
            _context.next = 5;
            return _user2.default.findOne({ email: body.email });

          case 5:
            dbUser = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', res.status(500).json({ status: 'error', error: _context.t0 }));

          case 11:
            passwordMatch = dbUser ? _bcrypt2.default.compareSync(body.password, dbUser.password) : false;

            if (!(!dbUser || !passwordMatch)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt('return', res.status(400).json({
              status: 'error',
              error: {
                message: 'Usuario y/o contraseña incorrectos!'
              }
            }));

          case 14:

            dbUser.password = undefined;
            token = _jsonwebtoken2.default.sign({ user: dbUser }, _config.TOKEN_SEED, { expiresIn: _config.TOKEN_EXPIRATION });

            res.json({ status: 'ok', user: dbUser, token: token });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = loginCtrl;