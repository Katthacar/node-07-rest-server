const { Router } = require('express');
const loginCtrl = require('./../controllers/login.ctrl');

const loginRouter = Router();

loginRouter.route('/login')
  .post(loginCtrl.login);

module.exports = loginRouter;
