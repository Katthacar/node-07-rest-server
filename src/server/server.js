import express from 'express';

import { PORT } from './config/config';
import bodyapp from './middlewares/bodyParser';
import router from './routes';

const server = express();

/**
 * SETTINGS
 */
server.set('port', PORT || 3000);

/**
 * MIDDLEWARES
 */
server.use(bodyapp);

/**
 * ROUTES
 */
server.use('/rest-server/api', router);

export default server;
