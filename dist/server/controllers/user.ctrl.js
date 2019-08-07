'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _user = require('./../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userCtrl = {};

userCtrl.getUsers = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var from, to, status, dbUsers, count;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            from = Number(req.query.from || 0);
            to = Number(req.query.to || 5);
            status = req.query.status || true;
            _context.prev = 3;
            _context.next = 6;
            return _user2.default.find({ status: status }, 'name email role status google img').skip(from).limit(to).exec();

          case 6:
            dbUsers = _context.sent;
            _context.next = 9;
            return _user2.default.countDocuments({ status: status });

          case 9:
            count = _context.sent;

            res.json({ status: 'ok', data: dbUsers, count: count });

            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](3);

            res.status(400).json({ status: 'error', error: _context.t0 });

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

userCtrl.createUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var body, user, dbUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            body = req.body;
            user = new _user2.default({
              name: body.name,
              email: body.email,
              password: _bcrypt2.default.hashSync(body.password, 10),
              role: body.role
            });
            _context2.prev = 2;
            _context2.next = 5;
            return user.save();

          case 5:
            dbUser = _context2.sent;

            dbUser.password = undefined;
            res.json({ status: 'ok', data: dbUser });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](2);

            res.status(400).json({ status: 'ok', error: _context2.t0 });

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[2, 10]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

userCtrl.updateUserById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, body, dbUser;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            body = _underscore2.default.pick(req.body, ['name', 'email', 'img', 'role', 'status']);
            _context3.prev = 2;
            _context3.next = 5;
            return _user2.default.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' });

          case 5:
            dbUser = _context3.sent;

            res.json({ status: 'ok', data: dbUser });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](2);

            res.status(400).json({ status: 'error', error: _context3.t0 });

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[2, 9]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

userCtrl.deleteUserById = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, newUser, dbUser;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            newUser = { status: false };
            _context4.prev = 2;
            _context4.next = 5;
            return _user2.default.findByIdAndUpdate(id, newUser, { new: true });

          case 5:
            dbUser = _context4.sent;

            res.json({ status: 'ok', data: dbUser });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](2);

            res.status(400).json({ status: 'error', error: _context4.t0 });

          case 12:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[2, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.default = userCtrl;