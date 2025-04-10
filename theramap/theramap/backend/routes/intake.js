document.addEventListener('DOMContentLoaded', () => {
  const intakeForm = document.getElementById('intake-form');

  intakeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect values from form inputs
    const insurance = document.getElementById('insurance').value;
    const location = document.getElementById('location').value;
    const concerns = Array.from(
      document.querySelectorAll('input[name="concerns"]:checked')
    ).map(checkbox => checkbox.value);

    try {
      // Fetch therapist matches
      const response = await fetch(`/api/therapists?insurance=${insurance}&location=${location}&concerns=${concerns.join(',')}`);
      const data = await response.json();

      // Save data to localStorage so results.html can access it
      localStorage.setItem('therapistResults', JSON.stringify(data));

      // Redirect to results page
      window.location.href = 'results.html';
    } catch (error) {
      console.error('Error fetching therapist matches:', error);
      alert('Something went wrong. Please try again.');
    }
  });
});
