const Product = require('./../models/product.model');

const productCtrl = {};

/**
 * GET ALL PRODUCTS
 */
productCtrl.getProducts = async (req, res) => {
  const from = Number(req.query.from || 0);
  const to = Number(req.query.to || 5);
  try {
    const products = await Product.find({ available: true })
      .skip(from).limit(to)
      .populate('user', 'name email')
      .populate('category', 'name');
    const total = await Product.countDocuments({ available: true });
    res.json({ status: 'ok', total, data: products });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * GET PRODUCT BY ID
 */
productCtrl.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const dbProduct = await Product.findById(id)
      .populate('user', 'name email')
      .populate('category', 'name');
    if (!dbProduct) return res.status(404).json({ status: 'error', message: 'Product not found' });
    res.json({ status: 'ok', data: dbProduct });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * CREATE NEW PRODUCT
 */
productCtrl.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const dbProduct = await product.save();
    res.json({ status: 'ok', data: dbProduct });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * UPDATE PRODUCT BY ID
 */
productCtrl.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbProduct = await Product.findById(id);
    if (!dbProduct) return res.status(404).json({ status: 'error', message: 'Producto no existe' });
    const savedProduct = await
      Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, context: 'query' });
    res.json({ status: 'ok', data: savedProduct });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * DELETE PRODUCT BY ID
 */
productCtrl.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbProduct = await Product.findByIdAndDelete(id);
    res.json({ status: 'ok', data: dbProduct });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * DELETE ONLY CHANGE STATUS OF AVAILABLE TO FALSE
 */
productCtrl.changeStatus = async (req, res) => {
  const id = req.params.id;
  try {
    const dbProduct = await Product.findById(id);
    if (!dbProduct) return res.status(404).json({ status: 'error', message: 'Producto no existe' });
    dbProduct.available = false;
    const savedProduct = await dbProduct.save();
    res.json({ status: 'ok', data: savedProduct });
  } catch (error) {
    res.status(401).json({ status: 'error', error });
  }
}

/**
 * SEARCH PRODUCTS BY TERM ON NAME AND DESCRIPTION
 */
productCtrl.searchProduct = async (req, res) => {
  const term = req.params.term;
  const regExp = new RegExp(term, 'i');
  try {
    const dbProducts = await Product.find({ $or: [{ name: regExp }, { description: regExp }] })
      .populate('category', 'name')
      .populate('user', 'name, email');
    res.json({ status: 'ok', data: dbProducts });
  } catch (error) {
    res.status({ status: 'error', error });
  }
}

module.exports = productCtrl;
