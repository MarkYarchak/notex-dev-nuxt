const { ValidationError } = require('apollo-server-express');
const querystring = require('querystring');
const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const verifyRecoveryLink = async (_, userData) => {
  const verifiedToken = jwt.verify(userData.queryParametersToken, config.emailVerify);
  const userByEmail = await User.findOne({email: verifiedToken.email});
  if (userByEmail) {
    return userByEmail.recoveryUrlId === userData.paramsId ? true : new ValidationError('Link is deprecated');
  } else throw new ValidationError('Invalid email');
};

module.exports.verifyRecoveryLink = verifyRecoveryLink;
