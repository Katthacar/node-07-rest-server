
/**
 * PORT
 */
process.env.PORT = process.env.PORT || 4000

/**
 * ENVIRONMENT
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * EXPIRES TOKEN
 */
// 60 * 60 * 24 * 30
process.env.TOKEN_EXPIRATION = 60 * 60 * 24 * 30

/**
 * SEED TOKEN
 */
process.env.TOKEN_SEED = process.env.TOKEN_SEED || 'secret';

/**
 * DATA BASE
 */
const URL_DB = process.env.NODE_ENV === 'dev' ?
  'mongodb://localhost:27017/cafe' :
  process.env.MONGO_URI

process.env.URL_DB = URL_DB;
