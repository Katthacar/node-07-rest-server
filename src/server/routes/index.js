const { Router } = require('express');

const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const productRouter = require('./product.routes');
const fileUploadRouter = require('./upload.routes');
const showImageRouter = require('./showImage.routes');

const router = Router();

router.use(loginRouter);
router.use(userRouter);
router.use(categoryRouter);
router.use(productRouter);
router.use(fileUploadRouter);
router.use(showImageRouter);

module.exports = router;
