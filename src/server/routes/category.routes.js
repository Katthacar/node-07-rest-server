const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const Category = require('../models/category.model');
const { validToken, validAdminRole } = require('../middlewares/authentication');

const app = express();

app.get('/', (req, res) => {

});

module.exports = app;
