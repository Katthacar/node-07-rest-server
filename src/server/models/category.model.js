const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

categorySchema.plugin(uniqueValidator,
  { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
module.exports = mongoose.model('Category', categorySchema)
