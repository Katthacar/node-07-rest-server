const bcrypt = require('bcrypt');
const _ = require('underscore');

const User = require('./../models/user.model');

const userCtrl = {};

/**
 * GET ALL USERS WITH FILTER STATUS, AND FROM - TO
 */
userCtrl.getUsers = async (req, res) => {
  const from = Number(req.query.from || 0);
  const to = Number(req.query.to || 5);
  const status = req.query.status || true;
  try {
    const dbUsers =
      await User.find({ status }, 'name email role status google img')
        .skip(from).limit(to).exec();
    const count = await User.countDocuments({ status });
    res.json({ status: 'ok', data: dbUsers, count });

  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * GET USER BY ID AND STATUS
 */
userCtrl.getUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const status = req.query.status || true;
    const dbUser = await User.findOne({ _id, status }, 'name email role status google img');
    if (!dbUser) return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
    res.json({ status: 'ok', data: dbUser });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * CREATE NEW USER
 */
userCtrl.createUser = async (req, res) => {
  const body = req.body;
  try {
    const user = new User({
      name: body.name,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      role: body.role
    });
    const dbUser = await user.save();
    dbUser.password = undefined;
    res.json({ status: 'ok', data: dbUser });
  } catch (error) {
    res.status(400).json({ status: 'ok', error });
  }
}

/**
 * UPDATE USER BY ID
 */
userCtrl.updateUserById = async (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status']);
  try {
    const dbUser = await User.findById(id);
    if (!dbUser) return res.status(404).json({ status: 'error', message: 'Usuario no existe' });
    const updatedUser = await User.findByIdAndUpdate(id, body,
      { new: true, runValidators: true, context: 'query' });
    res.json({ status: 'ok', data: updatedUser });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

/**
 * DELETE USER BY ID
 */
userCtrl.deleteUserById = async (req, res) => {
  const id = req.params.id;
  const newUser = { status: false };
  try {
    const dbUser = await User.findById(id);
    if (!dbUser) return res.status(404).json({ status: 'error', message: 'Usuario no existe' });
    const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true });
    res.json({ status: 'ok', data: updatedUser });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

module.exports = userCtrl;
