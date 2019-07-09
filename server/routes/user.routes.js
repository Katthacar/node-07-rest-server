const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const _ = require('underscore');

const User = require('./../models/user.model');

app.get('/users', (req, res) => {
  const from = Number(req.query.from || 0);
  const to = Number(req.query.to || 5);
  const status = req.query.status || true;
  User.find({ status }, 'name email role status google img')
    .skip(from)
    .limit(to)
    .exec((err, users) => {
      if (err) return res.status(400).json({
        error: true,
        err
      });
      User.countDocuments({ status }, (err, count) => {
        res.json({
          error: false,
          users,
          count
        });
      })
    })
})

app.post('/users', (req, res) => {
  let body = req.body;
  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  });
  user.save((err, userDB) => {
    if (err) return res.status(400).json({
      error: true,
      err
    });
    userDB.password = undefined;
    res.json({
      error: false,
      user: userDB
    })
  });
})

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status']);
  User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
    if (err) return res.status(400).json({
      error: true,
      err
    });
    res.json({
      error: false,
      user: userDB
    });
  })
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const newUser = { status: false };
  User.findByIdAndUpdate(id, newUser, { new: true }, (err, user) => {
    if (err) return res.status(400).json({
      error: true,
      err
    });
    res.json({
      error: false,
      user
    })
  })
})

module.exports = app;
