const express = require('express');

const { PORT } = require('./config/config');
const appMiddlewares = require('./middlewares/app_middlewares');
const router = require('./routes');

const server = express();

/**
 * SETTINGS
 */
server.set('port', PORT || 3000);

/**
 * MIDDLEWARES
 */
server.use(appMiddlewares);

/**
 * ROUTES
 */
server.use('/rest-server/api', router);

module.exports = server;
