const { Router } = require('express');
const loginCtrl = require('./../controllers/loginCtrl');

const loginRouter = Router();

loginRouter.route('/login')
  .post(loginCtrl.login);

module.exports = loginRouter;
