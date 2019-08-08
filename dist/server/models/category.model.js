'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categorySchema = new _mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

categorySchema.plugin(_mongooseUniqueValidator2.default, { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
exports.default = (0, _mongoose.model)('category', categorySchema);