import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

categorySchema.plugin(uniqueValidator,
  { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
export default model('category', categorySchema);
