const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:  String,
  total: Number
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);