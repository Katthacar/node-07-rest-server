const fs = require('fs');
const path = require('path');

const User = require('./../models/user.model');
const Product = require('./../models/product.model');

const uploadFileCtrl = {};

uploadFileCtrl.uploadFile = (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).json({ status: 'error', message: 'Archivo no fué cargado' });
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const file = req.files.myFile;
  let fileName = file.name.split('.')[0];
  const ext = file.name.split('.')[1];

  const type = req.params.type;
  const id = req.params.id;

  const validExtensions = ['jpg', 'png', 'gif', 'jpeg'];
  const validTypes = ['products', 'users'];

  if (validExtensions.indexOf(ext) < 0)
    return res.status(400).json({ status: 'error', message: 'Extensión no permitida' });
  if (validTypes.indexOf(type) < 0)
    return res.status(400).json({ status: 'error', message: 'Tipo no permitido' });

  // Use the mv() method to place the file somewhere on your server
  fileName += `-${id}-${new Date().getMilliseconds()}.${ext}`;
  file.mv(`src/uploads/${type}/${fileName}`, (error) => {
    if (error) {
      return res.status(500).json({ status: 'error', error });
    } else
      if (type === 'users') uploadFileUser(id, res, type, fileName);
      else uploadFileProduct(id, res, type, fileName);
  });
}

const uploadFileUser = (id, res, type, fileName) => {
  let imgPath = path.resolve(__dirname, '..', '..', 'uploads', `${type}`, `${fileName}`);
  User.findById(id, (error, dbUser) => {
    if (error) return res.status(500).json({ status: 'error', error });
    // If !dbUser, file is deleted
    if (!dbUser) {
      fs.unlinkSync(imgPath);
      return res.status(404).json({ status: 'error', message: 'Usuario no existe' });
    }
    imgPath = path.resolve(__dirname, '..', '..', 'uploads', `${type}`, `${dbUser.img}`);
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    dbUser.img = fileName;
    dbUser.save((error, resUser) => {
      if (error) return res.status(500).json({ status: 'error', error });
      res.json({ status: 'ok', data: { user: resUser, message: 'Archivo cargado con éxito' } });
    });
  });
}

const uploadFileProduct = (id, res, type, fileName) => {
  let imgPath = path.resolve(__dirname, '..', '..', 'uploads', `${type}`, `${fileName}`);
  Product.findById(id, (error, dbProduct) => {
    if (error) return res.status(500).json({ status: 'error', error });
    // If !dbUser, file is deleted
    if (!dbProduct) {
      fs.unlinkSync(imgPath);
      return res.status(404).json({ status: 'error', message: 'Producto no existe' });
    }
    imgPath = path.resolve(__dirname, '..', '..', 'uploads', `${type}`, `${dbProduct.img}`);
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    dbProduct.img = fileName;
    dbProduct.save((error, resProduct) => {
      if (error) return res.statu(500).json({ status: 'error', error });
      res.json({ status: 'ok', data: { product: resProduct, message: 'Archivo cargado con éxito' } });
    });
  });
}

module.exports = uploadFileCtrl;
