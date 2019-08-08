const { Schema, model } = require( 'mongoose');
const uniqueValidator = require( 'mongoose-unique-validator');

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

categorySchema.plugin(uniqueValidator,
  { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
module.exports = model('category', categorySchema);
