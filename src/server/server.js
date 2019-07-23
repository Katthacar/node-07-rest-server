require('./config/config');

const express = require('express');

const app = express();

/**
 * SETTINGS
 */
app.set('port', process.env.PORT);

/**
 * MIDDLEWARES
 */
app.use(require('./middlewares/bodyParser.middle'));

/**
 * ROUTES
 */
app.use('/rest-server/api', require('./routes'));

module.exports = app;
