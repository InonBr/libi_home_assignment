const express = require('express');
const router = new express.Router();
const Movie = require('../models/Movies');
const { check, validationResult } = require('express-validator');

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

      return res.status(200).json({
        msg: 'user logged in successfully',
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ err: 'Server error', message: err.message });
    }
  }
);

module.exports = router;
