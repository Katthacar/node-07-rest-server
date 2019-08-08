const dotenv = require('dotenv');
dotenv.config();

/**
 * PORT
 */
process.env.PORT = process.env.PORT || 3000
const PORT = process.env.PORT;

/**
 * ENVIRONMENT
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const NODE_ENV = process.env.NODE_ENV;

/**
 * EXPIRES TOKEN
 */
// 60 * 60 * 24 * 30
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;

/**
 * SEED TOKEN
 */
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'secret';
const TOKEN_SEED = process.env.TOKEN_SEED;

/**
 * DATA BASE
 */
const MONGODB_URI = process.env.NODE_ENV === 'dev' ?
  'mongodb://localhost/cafe' : process.env.MONGODB_URI;
process.env.MONGODB_URI = MONGODB_URI;

module.exports = {
  PORT, NODE_ENV, TOKEN_EXPIRATION, TOKEN_SEED, MONGODB_URI
}
