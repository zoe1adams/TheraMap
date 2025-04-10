const Therapist = require('../models/Therapist');

// Helper function to filter therapists based on query
const buildFilterQuery = (insurance, location, concerns) => {
  const query = {};

  if (insurance) {
    query.insurance = insurance; // Exact match
  }

  if (location) {
    query.location = location; // Exact match or you can use regex for fuzzy matching
  }

  if (concerns && concerns.length > 0) {
    query.specialties = { $in: concerns }; // At least one concern matches
  }

  return query;
};

// GET /api/therapists
const getTherapists = async (req, res) => {
  try {
    const { insurance, location, concerns } = req.query;

    const filterQuery = buildFilterQuery(
      insurance,
      location,
      concerns ? concerns.split(',') : []
    );

    const therapists = await Therapist.find(filterQuery);
    res.status(200).json(therapists);
  } catch (error) {
    console.error('Error fetching therapists:', error);
    res.status(500).json({ message: 'Server error while fetching therapists' });
  }
};

module.exports = {
  getTherapists,
};

