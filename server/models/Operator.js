const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Operator = mongoose.plugin(uniqueValidator).model('Operator', {
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

module.exports.Operator = Operator;
