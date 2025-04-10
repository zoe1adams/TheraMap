document.getElementById("search-button").addEventListener("click", async function() {
  const searchQuery = document.getElementById("search-query").value;

  // Validate user input
  if (searchQuery.trim() === "") {
    alert("Please enter a search query.");
    return;
  }

  // Send the query to the server
  try {
    const response = await fetch("/api/search-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: searchQuery })
    });

    const data = await response.json();

    if (data.success) {
      // Display the AI results (e.g., therapists or other matched info)
      displayResults(data.results);
    } else {
      alert("No results found.");
    }
  } catch (error) {
    console.error("Error during search:", error);
    alert("Something went wrong. Please try again.");
  }
});

function displayResults(results) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear any previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  // Loop through the results and display them
  results.forEach(result => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result-item");

    resultDiv.innerHTML = `
      <h3>${result.name}</h3>
      <p>Location: ${result.location}</p>
      <p>Specialty: ${result.specialty}</p>
      <p>Insurance: ${result.insurance}</p>
      <a href="${result.url}" target="_blank">Book Appointment</a>
    `;

    resultsContainer.appendChild(resultDiv);
  });
}
