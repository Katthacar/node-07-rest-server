const { MONGODB_URI } = require('./config/config');

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

const connection = mongoose.connection;

connection.once('open', () => console.log('Database Connected successful!'))
  .on('error', (error) => console.log(`ERROR => ${error}`));
