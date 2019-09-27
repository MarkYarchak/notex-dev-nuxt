const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Admin = mongoose.plugin(uniqueValidator).model('Admin', {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  settings: {
    type: Object,
  },
});

module.exports.Admin = Admin;
