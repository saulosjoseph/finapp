const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id:  {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  total: Number
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);