const mongoose = require('mongoose');

const db = 'mongodb://0.0.0.0:27017/docker-mongo-db';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
