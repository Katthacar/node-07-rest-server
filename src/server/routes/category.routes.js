import { Router } from 'express';
import { validToken, validAdminRole } from '../middlewares/authentication';

const categoryRouter = Router();

categoryRouter.route('/')

export default categoryRouter;
