const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  category: {
    required: true,
    unique: true,
    type: String,
  },
  count: {
    required: true,
    type: Number,
    default: 1,
  },
});

module.exports = Category = mongoose.model('category', CategorySchema);
