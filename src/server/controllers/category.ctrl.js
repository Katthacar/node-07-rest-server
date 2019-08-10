const _ = require('underscore');

const Category = require('../models/category.model');

const categoryCtrl = {};

/**
 * GET ALL CATEGORIES
 */
categoryCtrl.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    const count = await Category.countDocuments({});
    res.json({ status: 'ok', data: categories, count });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * GET CATEGORY BY ID
 */
categoryCtrl.getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const dbCategory = await Category.findById(id);
    if (!dbCategory)
      return res.status(404).json({ status: 'error', message: 'Categoría no encontrada' });
    res.json({ status: 'ok', data: dbCategory });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * CREATE NEW CATEGORY
 */
categoryCtrl.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const dbCategory = await category.save();
    res.json({ status: 'ok', data: dbCategory });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * UPDATE CATEGORY BY ID
 */
categoryCtrl.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const dbCategory = await Category.findById(id);
    if (!dbCategory) return res.status(404).json({ status: 'error', message: 'Categoría no existe' });
    const updatedCategory = await
      Category.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, context: 'query' });
    res.json({ status: 'ok', data: updatedCategory });
  } catch (error) {
    res.status(400).json({ status: 'ok', error });
  }
}

/**
 * DELETE CATEGORY BY ID
 */
categoryCtrl.deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const dbCategory = await Category.findById(id);
    if (!dbCategory) return res.status(404).json({ status: 'error', message: 'Categoría no existe' });
    const updatedCategory = await Category.findByIdAndDelete(id);
    res.json({ status: 'ok', data: updatedCategory });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

module.exports = categoryCtrl;
