require('dotenv').config();
const jwt = require('jsonwebtoken');
const findUserById = require('../lib/findUser');

const auth = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization,
      process.env.TOKEN,
      (err, decodedToken) => {
        if (err) {
          res.status(401).send('forbidden request');
        } else {
          findUserById(decodedToken)
            .then((data) => {
              req.currentUser = data;
              next();
            })
            .catch((err) => {
              console.log(err);
              res.status(401).send('forbidden request');
            });
        }
      }
    );
  } else {
    res.status(401).send('forbidden request');
  }
};

module.exports = auth;
