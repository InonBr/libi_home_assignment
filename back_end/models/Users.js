const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('users', UserSchema);
