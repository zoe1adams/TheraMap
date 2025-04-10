const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Assuming you're using a static JSON file for mock data (you can switch to a database later)
const therapistsDataPath = path.join(__dirname, '../data/therapists.json');

// Endpoint to get all therapists or match based on query parameters (location, insurance, concerns)
router.get('/', (req, res) => {
  const { location, insurance, concerns } = req.query;

  // Read the therapist data from the JSON file (or replace with a database query)
  fs.readFile(therapistsDataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load therapist data.' });
    }

    let therapists = JSON.parse(data);

    // Filter therapists based on query parameters
    if (location) {
      therapists = therapists.filter(therapist => therapist.location.toLowerCase().includes(location.toLowerCase()));
    }
    if (insurance) {
      therapists = therapists.filter(therapist => therapist.insurance.toLowerCase() === insurance.toLowerCase());
    }
    if (concerns) {
      therapists = therapists.filter(therapist => therapist.specialty.toLowerCase().includes(concerns.toLowerCase()));
    }

    // Return the filtered list of therapists
    res.json(therapists);
  });
});

// Add other routes for therapist-specific functionalities if needed (like adding, updating, or deleting)

module.exports = router;
