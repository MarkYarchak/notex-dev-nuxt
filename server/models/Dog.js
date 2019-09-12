const mongoose = require('mongoose');

const Dog = mongoose.model('Dog', {
  name: {
    type: String,
    unique: true,
  },
});

module.exports.Dog = Dog;
