
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
  'mongodb+srv://Katthacar:Zywpn484TGg8w9z2@cluster0-5dxxg.mongodb.net/cafe'

process.env.URL_DB = URL_DB;
