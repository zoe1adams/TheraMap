const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Import route files
const therapistRoutes = require('./routes/therapists');
const articleRoutes = require('./routes/articles');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Middleware to parse JSON
app.use(express.json());

// Base test route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use API routes
app.use('/api/therapists', therapistRoutes);
app.use('/api/articles', articleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
