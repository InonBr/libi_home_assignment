const Movie = require('../models/Movies');
const Category = require('../models/Categorys');

const findMoviesAndCategorys = async () => {
  const movies = await Movie.find({});
  const categorys = await Category.find({ count: { $gt: 0 } });

  return { movies, categorys };
};

module.exports = findMoviesAndCategorys;
