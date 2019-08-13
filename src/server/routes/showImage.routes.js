const { Router } = require('express');

const showImagesCtrl = require('./../controllers/showImagesCtrl');

const showImageRouter = Router();

showImageRouter.route('/images/:type/:img')
  .get(showImagesCtrl.showImage);

module.exports = showImageRouter;
