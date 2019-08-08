import { MONGODB_URI } from './config/config';

import mongoose from 'mongoose';

mongoose.connect(MONGODB_URI,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

const connection = mongoose.connection;

connection.once('open', () => console.log('Database Connected successful!'))
  .on('error', (error) => console.log(`ERROR => ${error}`));

export default connection;
