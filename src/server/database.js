require('./config/config');

const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

const connection = mongoose.connection;

connection.once('open', () => console.log('Database Connected successful!'));
