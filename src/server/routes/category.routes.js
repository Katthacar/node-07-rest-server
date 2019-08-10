const { Router } = require('express');

const { validToken, validAdminRole } = require('../middlewares/authentication');
const categoryCtrl = require('./../controllers/category.ctrl');

const categoryRouter = Router();

categoryRouter.route('/categories')
  .get(validToken, categoryCtrl.getCategories)
  .post([validToken, validAdminRole], categoryCtrl.createCategory);

categoryRouter.route('/categories/:id')
  .get(validToken, categoryCtrl.getCategoryById)
  .put([validToken, validAdminRole], categoryCtrl.updateCategory)
  .delete([validToken, validAdminRole], categoryCtrl.deleteCategory);

module.exports = categoryRouter;
