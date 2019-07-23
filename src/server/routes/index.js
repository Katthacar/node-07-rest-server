const express = require('express');
const app = express();

app.use(require('./login.routes'));
app.use(require('./user.routes'));

module.exports = app;
