const Movie = require('../models/Movies');
const Category = require('../models/Categorys');

const findMoviesAndCategorys = async () => {
  const movies = await Movie.find({});
  const categorys = await Category.find({ count: { $gt: 0 } });

  return { movies, categorys };
};

const findAndDelete = async (movieId) => {
  const movie = await Movie.findById(movieId);

  if (movie) {
    const category = await Category.findOne({ category: movie.category });

    category.count--;

    await Movie.findByIdAndDelete(movieId);
    await category.save();

    return movie;
  } else {
    return movie;
  }
};

module.exports = { findMoviesAndCategorys, findAndDelete };
