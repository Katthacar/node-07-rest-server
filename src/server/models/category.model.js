const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Schema({
  name: {
    type: String, unique: true, required: [true, 'El nombre es necesario']
  },
  status: { type: Boolean, default: true },
  user: {
    type: Schema.Types.ObjectId, ref:'user'
  }
}, { timestamps: true });

categorySchema.plugin(uniqueValidator,
  { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
module.exports = model('category', categorySchema);
