// articles.js

// Importing the function from api.js to fetch articles
import { fetchArticles } from './api.js'; 

// Function to load and display articles when the page loads
async function loadArticles() {
  const articles = await fetchArticles(); // Fetch the articles from the API
  displayArticles(articles); // Display the articles on the page
}

// Function to render the fetched articles to the page
function displayArticles(articles) {
  const articlesContainer = document.getElementById('articles-container'); // Get the container where the articles will be displayed
  articlesContainer.innerHTML = ''; // Clear any existing articles

  // Check if there are no articles
  if (articles.length === 0) {
    articlesContainer.innerHTML = '<p>No articles available at the moment.</p>'; // Show a message if no articles are available
    return;
  }

  // Loop through the articles and create HTML for each article
  articles.forEach(article => {
    const articleElement = document.createElement('div'); // Create a div for each article
    articleElement.classList.add('article'); // Add the 'article' class to the div
    
    // Insert the article details into the div
    articleElement.innerHTML = `
      <h3>${article.title}</h3>
      <p><em>By ${article.author}</em></p>
      <p>${article.summary}</p>
      <a href="${article.url}" target="_blank">Read more...</a>
    `;
    
    // Append the article element to the articles container
    articlesContainer.appendChild(articleElement);
  });
}

// Event listener to trigger loading articles when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadArticles);
