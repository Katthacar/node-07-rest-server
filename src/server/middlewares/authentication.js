import jwt from 'jsonwebtoken';

import {TOKEN_SEED} from './../config/config';

/**
 * Valid TOKEN
 */
const validToken = async (req, res, next) => {
  const token = req.get('Authorization');
  try {
    const decoded = await jwt.verify(token, TOKEN_SEED);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ status: 'error', error });
  }
}

/**
 * Valid ADMIN_ROLE
 */
const validAdminRole = (req, res, next) => {
  const user = req.user;
  if (user.role !== 'ADMIN_ROLE') {
    return res.status(401).json({
      status: 'error',
      error: {
        message: 'Usuario no autorizado'
      }
    });
  }
  next();
}

export {
  validToken,
  validAdminRole
}
