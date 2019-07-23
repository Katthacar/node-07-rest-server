const jwt = require('jsonwebtoken');

/**
 * Valid token
 */
const validToken = async (req, res, next) => {
  const token = req.get('Authorization');
  try {
    const decoded = await jwt.verify(token, process.env.TOKEN_SEED);
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
    return res.json({
      error: true,
      err: {
        message: 'Usuario no está autorizado para la operación'
      }
    });
  }
  next();
}

module.exports = {
  validToken, validAdminRole
}
