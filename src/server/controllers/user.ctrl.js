import bcrypt from 'bcrypt';
import _ from 'underscore';

import User from './../models/user.model';

const userCtrl = {};

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

userCtrl.createUser = async (req, res) => {
  let body = req.body;
  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });
  try {
    const dbUser = await user.save();
    dbUser.password = undefined;
    res.json({ status: 'ok', data: dbUser });
  } catch (error) {
    res.status(400).json({ status: 'ok', error });
  }
}

userCtrl.updateUserById = async (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status']);
  try {
    const dbUser = await User.findByIdAndUpdate(id, body,
      { new: true, runValidators: true, context: 'query' });
    res.json({ status: 'ok', data: dbUser });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

userCtrl.deleteUserById = async (req, res) => {
  const id = req.params.id;
  const newUser = { status: false };
  try {
    const dbUser = await User.findByIdAndUpdate(id, newUser, { new: true });
    res.json({ status: 'ok', data: dbUser });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
}

export default userCtrl;
