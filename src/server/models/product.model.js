const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var productSchema = new Schema({
  name: { type: String, unique: true, required: [true, 'El nombre es necesario'] },
  unitPrice: { type: Number, required: [true, 'El precio únitario es necesario'] },
  img: {type: String},
  description: { type: String, required: false },
  available: { type: Boolean, required: true, default: true },
  category: {
    type: Schema.Types.ObjectId, ref: 'category', required: true
  },
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true }
});

productSchema.plugin(uniqueValidator,
  { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
module.exports = model('producto', productSchema);
