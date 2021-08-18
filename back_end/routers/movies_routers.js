const express = require('express');
const router = new express.Router();
const Movie = require('../models/Movies');
const Category = require('../models/Categorys');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const imdbUrlsTest = require('../lib/imbd');
const { findMoviesAndCategorys, findAndDelete } = require('../lib/movies');

router.post(
  '/add_movie',
  [
    check('category', 'Category is required').trim().not().isEmpty(),
    check('imdb', 'Valid IMDB url is required').trim().not().isEmpty().isURL(),
    check('name', 'Please enter a valid name').trim().not().isEmpty().isLength({
      max: 30,
    }),
    check('imdb').custom((imdb) => {
      if (!imdb.includes('imdb')) {
        throw new Error('imdb link is required');
      } else {
        return imdb;
      }
    }),
  ],
  auth,
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, category, imdb } = req.body;

      imdbUrlsTest(imdb)
        .then(async () => {
          const newMovie = Movie({
            name,
            category,
            imdb,
          });

          let movieCategory = await Category.findOne({ category });

          if (!movieCategory) {
            movieCategory = Category({
              category,
            });
          } else {
            movieCategory.count++;
          }

          await newMovie.save();
          await movieCategory.save();

          const movieData = await findMoviesAndCategorys();

          return res.status(200).json({
            msg: 'new movie added to list',
            movieData,
          });
        })
        .catch((err) => {
          console.error(err.message);
          res
            .status(404)
            .send({ err: 'invalid imdb link provided', message: err.message });
        });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ err: 'Server error', message: err.message });
    }
  }
);

router.get('/movies_list', auth, async (req, res) => {
  try {
    const movieData = await findMoviesAndCategorys();

    return res.status(200).json({
      msg: 'movies and ategorys lists',
      movieData,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ err: 'Server error', message: err.message });
  }
});

router.delete('/delete_movie/:movieId', auth, async (req, res) => {
  try {
    findAndDelete(req.params.movieId).then((data) => {
      if (!data) {
        return res.status(404).json({
          msg: 'no movie was found',
        });
      }

      return res.status(200).json({
        msg: 'deleted successfully',
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ err: 'Server error', message: err.message });
  }
});

module.exports = router;
