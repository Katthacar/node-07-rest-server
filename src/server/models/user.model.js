const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const VALID_ROLES = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol válido'
};

let userSchema = new Schema({
  name: {
    type: String, required: [true, 'El nombre es necesario']
  },
  email: {
    type: String, unique: true, required: [true, 'El correo es necesario']
  },
  password: {
    type: String, required: [true, 'El password es obligatorio']
  },
  img: {
    type: String
  },
  role: {
    type: String, default: 'USER_ROLE', enum: VALID_ROLES
  },
  status: {
    type: Boolean, default: true
  },
  google: {
    type: Boolean, default: false
  }
}, { timestamps: true });

// userSchema.methods.toJSON = function () {
//   let user = this;
//   let userObject = user.toObject();
//   delete userObject.password;
//   return userObject;
// }
userSchema.plugin(uniqueValidator,
  { message: '{PATH} debe ser único', type: 'mongoose-unique-validator' });
module.exports = model('user', userSchema);
