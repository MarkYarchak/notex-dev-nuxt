const { ValidationError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

const createUser = async (_, userData, { pubsub }) => {
  if (userData.password.length < 8) throw new ValidationError('Short password, required 8 or more symbols');
  userData.password = bcrypt.hashSync(userData.password, bcrypt.genSaltSync(10));
  const newUser = new User(userData);
  await newUser.save();
  await pubsub.publish('NEW_USER', {
    newUser: newUser,
  });
  return newUser;
};


module.exports.createUser = createUser;
