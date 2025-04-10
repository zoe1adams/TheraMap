const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: String,
  bio: String,
  insurance: [String],
  location: String,
  specialties: [String],
  ratings: Number,
  cost: Number
});

module.exports = mongoose.model('Therapist', therapistSchema);
