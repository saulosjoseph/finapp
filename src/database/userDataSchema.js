const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  email:  {
    type: String,
    required: true
  },
  total: Number,
  educatio: {
    type: Number,
    default: this.total * 0.1
  },
  basic: {
    type: Number,
    default: this.total * 0.55
  },
  fun: {
    type: Number,
    default: this.total * 0.1
  },
  longSavings: {
    type: Number,
    default: this.total * 0.1
  },
  shortSavings: {
    type: Number,
    default: this.total * 0.15
  },
}, { collection: 'users' });

module.exports = mongoose.model('userData', userDataSchema);