import { Router } from 'express';
import { validToken, validAdminRole } from '../middlewares/authentication';
import userCtrl from './../controllers/user.ctrl';

const userRouter = Router();

userRouter.route('/users')
  .get(validToken, userCtrl.getUsers)
  .post([validToken, validAdminRole], userCtrl.createUser);

userRouter.route('/users/:id')
  .put([validToken, validAdminRole], userCtrl.updateUserById)
  .delete([validToken, validAdminRole], userCtrl.deleteUserById);

export default userRouter;
