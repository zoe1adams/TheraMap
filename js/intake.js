// intake.js

// Get references to the form elements
const form = document.getElementById("intake-form");
const insuranceInput = document.getElementById("insurance");
const locationInput = document.getElementById("location");
const concernsInput = document.getElementById("concerns");
const formatSelect = document.getElementById("format");

// Function to handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get values from the form
  const insurance = insuranceInput.value;
  const location = locationInput.value;
  const concerns = concernsInput.value;
  const format = formatSelect.value;

  // Prepare the request body
  const requestBody = {
    insurance,
    location,
    mentalHealthConcern: concerns, // Concerns typed by the user
    format,
  };

  try {
    // Send POST request to the server with the form data
    const response = await fetch("/api/match-therapists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // Handle the response from the server
    if (response.ok) {
      const matchedTherapists = await response.json();
      // Save the results in localStorage to use on the results page
      localStorage.setItem("matchedTherapists", JSON.stringify(matchedTherapists));

      // Redirect to results page
      window.location.href = "results.html";
    } else {
      alert("No therapists found, please try again.");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("Something went wrong. Please try again.");
  }
});
