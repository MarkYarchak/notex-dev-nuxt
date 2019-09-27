const { AuthenticationError, ValidationError, UserInputError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

const deleteUser = async (_, userData) => {
  const availableUser = await User.findOne({_id: userData.id})
    .catch(function() { throw new UserInputError('Identify user is not correct') });
  if (availableUser) {
    if (bcrypt.compareSync(userData.password, availableUser.password)) {
      return User.findByIdAndDelete(userData.id);
    } else throw new ValidationError('Wrong password');
  } else throw new AuthenticationError('No user registered');
};


module.exports.deleteUser = deleteUser;
