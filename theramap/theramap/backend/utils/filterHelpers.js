// filterHelpers.js

// Function to filter therapists based on AI-generated response (e.g., anxiety, depression)
function filterBySpecialty(therapists, specialty) {
  return therapists.filter(therapist =>
    therapist.specialty.toLowerCase() === specialty.toLowerCase()
  );
}

// Function to filter therapists by location
function filterByLocation(therapists, location) {
  return therapists.filter(therapist =>
    therapist.location.toLowerCase() === location.toLowerCase()
  );
}

// Function to filter therapists by insurance
function filterByInsurance(therapists, insurance) {
  return therapists.filter(therapist =>
    therapist.insurance.toLowerCase() === insurance.toLowerCase()
  );
}

// Combine multiple filter criteria
function applyFilters(therapists, filters) {
  let filteredTherapists = therapists;

  if (filters.specialty) {
    filteredTherapists = filterBySpecialty(filteredTherapists, filters.specialty);
  }

  if (filters.location) {
    filteredTherapists = filterByLocation(filteredTherapists, filters.location);
  }

  if (filters.insurance) {
    filteredTherapists = filterByInsurance(filteredTherapists, filters.insurance);
  }

  return filteredTherapists;
}

// Export the helper functions to be used elsewhere
module.exports = {
  filterBySpecialty,
  filterByLocation,
  filterByInsurance,
  applyFilters,
};
