const express = require('express');
const router = new express.Router();
const Movie = require('../models/Movies');
const auth = require('../middleware/auth');

router.get('/movies_list', auth, async (req, res) => {
  try {
    const movie = await Movie.find({});

    console.log(movie);

    return res.status(200).json({
      msg: 'test',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ err: 'Server error', message: err.message });
  }
});

module.exports = router;
