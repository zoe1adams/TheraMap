const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tags: [String], // Optional: e.g., ["anxiety", "resources", "affordable care"]
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', articleSchema);
