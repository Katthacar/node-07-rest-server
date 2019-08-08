const { Router } = require('express');

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');

const router = Router();

router.use(loginRouter);
router.use(userRouter);

module.exports = router;
