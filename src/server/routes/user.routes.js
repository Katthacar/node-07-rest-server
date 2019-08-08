const { Router } = require('express');
const { validToken, validAdminRole } = require('../middlewares/authentication');
const userCtrl = require('./../controllers/user.ctrl');

const userRouter = Router();

userRouter.route('/users')
  .get(validToken, userCtrl.getUsers)
  .post([validToken, validAdminRole], userCtrl.createUser);

userRouter.route('/users/:id')
  .put([validToken, validAdminRole], userCtrl.updateUserById)
  .delete([validToken, validAdminRole], userCtrl.deleteUserById);

module.exports = userRouter;
