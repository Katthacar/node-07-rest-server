const { Router } = require('express');

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');

const router = Router();

router.use(loginRouter);
router.use(userRouter);
router.use(categoryRouter);
router.use(productRouter);

module.exports = router;
