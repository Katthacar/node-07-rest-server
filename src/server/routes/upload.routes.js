const { Router } = require('express');
const fileUpload = require('express-fileupload');

const uploadCtrl = require('./../controllers/uploadFileCtrl');

const fileUploadRouter = Router();

fileUploadRouter.use(fileUpload({ useTempFiles: true, }));

fileUploadRouter.route('/upload/:type/:id')
  .put(uploadCtrl.uploadFile);

module.exports = fileUploadRouter;
