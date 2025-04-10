// articles.js

// Function to fetch and display articles
async function fetchArticles() {
  try {
    // Fetch articles from the backend API
    const response = await fetch('/api/articles');
    if (!response.ok) {
      throw new Error('Error fetching articles');
    }
    
    // Parse the response as JSON
    const articles = await response.json();
    
    // Display articles on the page
    displayArticles(articles);
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    alert('There was an issue loading the articles. Please try again later.');
  }
}

// Function to display the articles on the page
function displayArticles(articles) {
  const articlesContainer = document.getElementById('articles-container');
  articlesContainer.innerHTML = ''; // Clear any previous content

  if (articles.length === 0) {
    articlesContainer.innerHTML = '<p>No articles available at the moment.</p>';
    return;
  }

  // Iterate over the articles and create HTML for each article
  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');
    
    // Create the HTML structure for each article
    articleElement.innerHTML = `
      <h3>${article.title}</h3>
      <p><em>By ${article.author}</em></p>
      <p>${article.summary}</p>
      <a href="${article.url}" target="_blank">Read more...</a>
    `;
    
    // Append the article element to the container
    articlesContainer.appendChild(articleElement);
  });
}

// Call fetchArticles when the page loads
document.addEventListener('DOMContentLoaded', fetchArticles);
