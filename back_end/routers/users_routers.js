require('dotenv').config();
const express = require('express');
const router = new express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

router.post('/createAdminUser', async (req, res) => {
  try {
    const password = await bcrypt.hash('admin', 10);

    const newUser = User({
      userName: 'admin',
      password,
    });

    await newUser.save();

    return res.status(200).json({
      msg: 'user saved successfully',
      user: newUser,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ err: 'Server error', message: err.message });
  }
});

router.post(
  '/login',
  [
    check('userName', 'Please includ a username').trim(),
    check('password', 'Please enter a valid password').trim().not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      /**
       * if there are errors return 400 (bed request);
       */
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { userName, password } = req.body;

      const user = await User.findOne({ userName });

      if (!user) {
        return res.status(400).json({ msg: 'invalid credentials' });
      }

      const compare = await bcrypt.compare(password, user.password);

      if (!compare) {
        return res.status(400).json({ msg: 'invalid credentials' });
      }

      const token = jwt.sign(
        {
          id: user._id,
          userName: user.userName,
        },
        process.env.TOKEN
      );

      return res.status(200).json({
        msg: 'user logged in successfully',
        token,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ err: 'Server error', message: err.message });
    }
  }
);

module.exports = router;
