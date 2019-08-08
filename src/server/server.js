const express = require('express');

const { PORT } = require('./config/config');
const middle = require('./middlewares/bodyParser');
const router = require('./routes');

const server = express();

/**
 * SETTINGS
 */
server.set('port', PORT || 3000);

/**
 * MIDDLEWARES
 */
server.use(middle);

/**
 * ROUTES
 */
server.use('/rest-server/api', router);

module.exports = server;
