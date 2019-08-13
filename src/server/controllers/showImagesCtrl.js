const path = require('path');
const fs = require('fs');

const showImagesCtrl = {};

showImagesCtrl.showImage = (req, res) => {
  const type = req.params.type;
  const img = req.params.img;
  let imgPath = path.resolve(__dirname, '..', '..', 'uploads', `${type}`, `${img}`);
  if (!fs.existsSync(imgPath))
    imgPath = path.resolve(__dirname, '..', 'assets', 'img', 'noimagefound.png');
  res.sendFile(imgPath);
}

module.exports = showImagesCtrl;
