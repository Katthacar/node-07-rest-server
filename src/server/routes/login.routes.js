import { Router } from 'express';
import loginCtrl from './../controllers/login.ctrl';

const loginRouter = Router();

loginRouter.route('/login')
  .post(loginCtrl.login);

export default loginRouter;
