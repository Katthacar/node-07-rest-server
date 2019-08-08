const { Router } = require('express');
const { validToken, validAdminRole } = require('../middlewares/authentication');

const categoryRouter = Router();

categoryRouter.route('/')

module.exports = categoryRouter;
