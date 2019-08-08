import dotenv from 'dotenv';
dotenv.config();

/**
 * PORT
 */
process.env.PORT = process.env.PORT || 3000
export const PORT = process.env.PORT;

/**
 * ENVIRONMENT
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
export const NODE_ENV = process.env.NODE_ENV;

/**
 * EXPIRES TOKEN
 */
// 60 * 60 * 24 * 30
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30
export const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;

/**
 * SEED TOKEN
 */
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'secret';
export const TOKEN_SEED = process.env.TOKEN_SEED;

/**
 * DATA BASE
 */
export const MONGODB_URI = process.env.NODE_ENV === 'dev' ?
  'mongodb://localhost/cafe' : process.env.MONGODB_URI;
process.env.MONGODB_URI = MONGODB_URI;
