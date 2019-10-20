const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const User = mongoose.plugin(uniqueValidator).model('User', {
  username: {
    type: String,
    required: true,
    unique: true,
    validate: (value) => /^[a-z0-9_]{3,18}$/m.test(value),
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(String(value).toLowerCase()),
  },
  fullName: {
    type: String,
    required: true,
    validate: (value) => /^[a-zA-Z ]+$/.test(value),
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  recoveryUrlId: {
    type: String,
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
