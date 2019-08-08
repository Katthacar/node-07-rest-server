import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { TOKEN_SEED, TOKEN_EXPIRATION } from './../config/config';
import User from '../models/user.model';

const loginCtrl = {}

loginCtrl.login = async (req, res) => {
  const body = req.body;
  let dbUser;
  try {
    dbUser = await User.findOne({ email: body.email });
  } catch (error) {
    return res.status(500).json({ status: 'error', error });
  }

  const passwordMatch = dbUser ? bcrypt.compareSync(body.password, dbUser.password) : false;
  if (!dbUser || !passwordMatch) {
    return res.status(400).json({
      status: 'error',
      error: {
        message: 'Usuario y/o contraseña incorrectos!'
      }
    });
  }

  dbUser.password = undefined
  const token = jwt.sign({ user: dbUser }, TOKEN_SEED, { expiresIn: TOKEN_EXPIRATION });
  res.json({ status: 'ok', user: dbUser, token });
}

export default loginCtrl;
