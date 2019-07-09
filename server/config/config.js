
/**
 * PORT
 */
process.env.PORT = process.env.PORT || 4000

/**
 * ENVIRONMENT
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * DATA BASE
 */
const URL_DB = process.env.NODE_ENV === 'dev' ?
  'mongodb://localhost:27017/cafe' :
  process.env.MONGO_URI

process.env.URL_DB = URL_DB;
