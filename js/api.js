// api.js

// Fetch articles from the server
async function fetchArticles() {
  try {
    const response = await fetch('/api/articles');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error(error);
    alert('There was an issue fetching articles.');
    return [];
  }
}

// Function to handle submitting form data for therapist matching
async function matchTherapists(data) {
  try {
    const response = await fetch('/match-therapists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to match therapists');
    }

    const matchedTherapists = await response.json();
    return matchedTherapists;
  } catch (error) {
    console.error('Error during therapist matching:', error);
    alert('There was an issue matching therapists. Please try again later.');
    return [];
  }
}

// Example of handling chat with AI using an API
async function handleAIChat(query) {
  try {
    const response = await fetch('/api/ai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const aiResponse = await response.json();
    return aiResponse;
  } catch (error) {
    console.error('AI chat error:', error);
    alert('Error communicating with the AI. Please try again later.');
  }
}

export { fetchArticles, matchTherapists, handleAIChat };
