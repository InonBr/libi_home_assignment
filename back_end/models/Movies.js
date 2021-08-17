const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    required: true,
    unique: true,
    type: String,
    maxLength: 30,
  },
  category: {
    required: true,
    type: String,
  },
  imdb: {
    required: true,
    // unique: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Movie = mongoose.model('movies', MovieSchema);
