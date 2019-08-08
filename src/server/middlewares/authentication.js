const jwt = require('jsonwebtoken');

const { TOKEN_SEED } = require('./../config/config');

/**
 * Valid TOKEN
 */
const validToken = async (req, res, next) => {
  const token = req.get('Authorization');
  try {
    const payload = await jwt.verify(token, TOKEN_SEED);
    req.user = payload.user;
    next();
  } catch (error) {
    res.status(401)
      .json({ status: 'error', error: { name: 'JsonWebTokenError', message: 'JWT debe ser proveído' } });
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
  } else
    next();
}

module.exports = {
  validToken,
  validAdminRole
}
