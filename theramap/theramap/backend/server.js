// server.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { getMatchingTherapists } = require("./therapistUtils"); // Assuming you have this utility file for filtering therapists

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse incoming JSON requests
app.use(express.static(path.join(__dirname, "public"))); // To serve static files from 'public' directory

// Sample therapists data
const therapists = [
  { id: 1, name: "Dr. Smith", location: "New York", insurance: "Aetna", specialty: "Anxiety", url: "#" },
  { id: 2, name: "Dr. Johnson", location: "Los Angeles", insurance: "Cigna", specialty: "Depression", url: "#" },
  { id: 3, name: "Dr. Brown", location: "Chicago", insurance: "United Healthcare", specialty: "General", url: "#" },
  // Add more therapists as needed
];

// Endpoint to handle the AI query and return matched therapists
app.post("/api/search-query", async (req, res) => {
  const { query } = req.body;

  try {
    // Simulate AI processing of the query
    const aiResponse = await processQueryWithAI(query);

    // Fetch therapists based on AI's response
    const matchedTherapists = getMatchingTherapists(aiResponse, therapists);

    // Send the matched therapists back to the frontend
    res.json({ success: true, results: matchedTherapists });
  } catch (error) {
    console.error("Error processing query:", error);
    res.status(500).json({ success: false, message: "Error processing the query" });
  }
});

// Simulate AI processing (this could be Dialogflow, Rasa, etc.)
async function processQueryWithAI(query) {
  // For simplicity, this just matches keywords in the query (you can replace this with an actual AI tool like Dialogflow)
  let aiResponse = "";

  if (query.toLowerCase().includes("anxiety")) {
    aiResponse = "Anxiety";
  } else if (query.toLowerCase().includes("depression")) {
    aiResponse = "Depression";
  } else {
    aiResponse = "General"; // Default case
  }

  return aiResponse;
}

// Utility to get matching therapists based on AI response
function getMatchingTherapists(aiResponse, therapists) {
  // Filter therapists based on AI response (specialty)
  return therapists.filter(therapist => therapist.specialty.toLowerCase() === aiResponse.toLowerCase());
}

// Serve the index.html file as the main entry point for the app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
