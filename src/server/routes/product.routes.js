const { Router } = require('express');

const { validToken, validAdminRole } = require('./../middlewares/authentication');
const productCtrl = require('../controllers/productCtrl');

const productRouter = Router();

productRouter.route('/products')
  .get(validToken, productCtrl.getProducts)
  .post([validToken, validAdminRole], productCtrl.createProduct);

productRouter.route('/products/:id')
  .get(validToken, productCtrl.getProductById)
  .put([validToken, validAdminRole], productCtrl.updateProduct)
  .delete([validToken, validAdminRole], productCtrl.deleteProduct);

productRouter.route('/products/search/:term')
  .get(validToken, productCtrl.searchProduct);

productRouter.route('/products/delstatus/:id')
  .delete([validToken, validAdminRole], productCtrl.changeStatus);

module.exports = productRouter;
