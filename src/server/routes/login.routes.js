const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const app = express();

app.post('/login', (req, res) => {
  const body = req.body;
  User.findOne({ email: body.email }, (err, user) => {
    if (err) return res.status(500).json({
      error: true,
      err
    });
    const passwordMatch = user ? bcrypt.compareSync(body.password, user.password) : false;
    if (!user || !passwordMatch) {
      return res.status(400).json({
        error: true,
        err: {
          message: 'Usuario y/o contraseña incorrectos!'
        }
      });
    }

    user.password = undefined
    const token = jwt.sign({
      user
    }, process.env.TOKEN_SEED, { expiresIn: process.env.TOKEN_EXPIRATION })
    res.json({
      error: false,
      user,
      token
    });

  })
})

module.exports = app;
