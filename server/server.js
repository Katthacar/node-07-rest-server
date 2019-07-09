require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json('Hello Universe');
})

app.use(require('./routes/user.routes'));

mongoose.connect(process.env.URL_DB, { useNewUrlParser: true, useCreateIndex: true }, (err, conn) => {
  if (err) throw err;
  console.log('Connection Success');
});

app.listen(PORT, () => console.log(`Listen on Port ${PORT}`));
