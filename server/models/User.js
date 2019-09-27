const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const User = mongoose.plugin(uniqueValidator).model('User', {
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 32,
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
    minlength: 8,
  },
  collaborators: {
    type: Array,
  },
  notes: {
    type: Array,
  },
  discussions: {
    type: Array,
  },
  organizations: {
    type: Array,
  },
  settings: {
    type: Object,
  },
});

module.exports.User = User;
