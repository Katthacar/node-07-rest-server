const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const middle = express();

// parse application/x-www-form-urlencoded
middle.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
middle.use(bodyParser.json())
// use cors for cross-origin
middle.use(cors());

module.exports = middle;
