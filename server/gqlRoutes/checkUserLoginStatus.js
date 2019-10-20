const { User } = require('../models/User');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkUserLoginStatus = async (_, userData) => {
  jwt.verify(userData, config.emailVerify);
  const decodedToken = jwt.decode(userData);
  const userById = await User.findOne({_id: decodedToken.id});
  return !!(bcrypt.compareSync(decodedToken.password, userById.password));
};

module.exports.checkUserLoginStatus = checkUserLoginStatus;
