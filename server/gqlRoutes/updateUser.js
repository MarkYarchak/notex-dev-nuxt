const { AuthenticationError, ValidationError, UserInputError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

const updateUser = async (_, userData) => {
  const findUser = await User.findById(userData.id)
    .catch(function() { throw new UserInputError('Identify user is not correct') });
  if (findUser) {
    if (bcrypt.compareSync(userData.password, findUser.password)) {
      if (userData.password.length < 8) throw new ValidationError('Short password, required 8 or more symbols');
      else userData.password = bcrypt.hashSync(userData.password, bcrypt.genSaltSync(10));
    } else throw new ValidationError('Wrong password');
    if (userData.email || userData.username) {
      const userWithInputData = await User.findOne({email: userData.email}) || await User.findOne({username: userData.username});
      if (!userWithInputData) return User.findOneAndUpdate({_id: userData.id}, userData);
      else throw new ValidationError('Your input data is already in use by another person');
    }
    return User.findByIdAndUpdate({_id: userData.id}, userData);
  } else throw new AuthenticationError('No user registered');
};


module.exports.updateUser = updateUser;
