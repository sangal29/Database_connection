const mongoose = require('mongoose');

// Define User Schema with validations
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 0
  }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
