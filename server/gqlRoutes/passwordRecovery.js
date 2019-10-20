const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcrypt');

const passwordRecovery = async (_, userData) => {
  const verified = jwt.verify(userData.urlToken, config.emailVerify);
  userData.password = bcrypt.hashSync(userData.password, bcrypt.genSaltSync(10));
  await User.updateOne({email: verified.email}, { password: userData.password, $unset: { recoveryUrlId: 1 } });
  return 'Password updated successfully';
};

module.exports.passwordRecovery = passwordRecovery;
