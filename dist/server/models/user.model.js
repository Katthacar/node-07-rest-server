'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALID_ROLES = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol válido'
};

var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'El correo es necesario']
  },
  password: {
    type: String,
    required: [true, 'El password es obligatorio']
  },
  img: {
    type: String
  },
  role: {
    type: String, default: 'USER_ROLE',
    enum: VALID_ROLES
  },
  status: {
    type: Boolean, default: true
  },
  google: {
    type: Boolean, default: false
  }
});

// userSchema.methods.toJSON = function () {
//   let user = this;
//   let userObject = user.toObject();
//   delete userObject.password;
//   return userObject;
// }
userSchema.plugin(_mongooseUniqueValidator2.default, { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
exports.default = (0, _mongoose.model)('user', userSchema);