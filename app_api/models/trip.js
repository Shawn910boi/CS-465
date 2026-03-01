const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  length: String,
  start: Date,
  resort: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Trip', tripSchema);