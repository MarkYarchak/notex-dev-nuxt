const { AuthenticationError, ValidationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const passport = require('passport');
// const JwtStrategy = require('passport-jwt').Strategy;
// const { ExtractJwt } = require('passport-jwt');
const { User } = require('../models/User');
// const { Operator } = require('../models/Operator');
// const { Admin } = require('../models/Admin');
const config = require('../config/database');

const userLogin = async (_, userData) => {
  const userByUsername = await User.findOne({username: userData.username});
  if (userByUsername) {
    if (bcrypt.compareSync(userData.password, userByUsername.password)) {
      return await jwt.sign({id: userByUsername.id, password: userByUsername.password}, config.secret, {expiresIn: '14 days'});
    } else throw new ValidationError('Wrong password');
  } else throw new AuthenticationError('No user registered')

  // User.getUserById(jwt_payload.data._media, (err, user) => {})

  // let opts = {};
  // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  // opts.secretOrKey = config.secret;
  // passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  //   if (userData.userType === 'user') {
  //     User.getUserById(jwt_payload.data._media, (err, user) => {
  //       if (err) return done(err, false);
  //       if (user) return done(null, user);
  //       return done(null, false);
  //     });
  //   } else if (userData.userType === 'operator') {
  //     Operator.getUserById(jwt_payload.data._media, (err, user) => {
  //       if (err) return done(err, false);
  //       if (user) return done(null, user);
  //       return done(null, false);
  //     });
  //   } else if (userData.userType === 'admin') {
  //     Admin.getAdminById(jwt_payload.data._media, (err, user) => {
  //       if (err) return done(err, false);
  //       if (user) return done(null, user);
  //       return done(null, false);
  //     });
  //   }
  // }));
};

module.exports.userLogin = userLogin;
