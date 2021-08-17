const Users = require('../models/Users');

const findUserById = async (userData) => {
  const id = userData.id;
  const user = await Users.findById(id);

  return user;
};

module.exports = findUserById;
