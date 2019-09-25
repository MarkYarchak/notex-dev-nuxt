const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Message = mongoose.plugin(uniqueValidator).model('Message', {
  author: {
    type: Object,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
});

module.exports.Message = Message;
