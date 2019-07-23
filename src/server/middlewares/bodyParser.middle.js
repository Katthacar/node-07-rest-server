const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use cors for cross-origin
app.use(cors());

module.exports = app;
