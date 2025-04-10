// Static articles (you can replace this with DB calls later)
const articles = [
  {
    id: 1,
    title: "Understanding Anxiety and How to Manage It",
    summary: "Learn practical tips and techniques for managing anxiety in daily life.",
    url: "https://example.com/articles/anxiety-management"
  },
  {
    id: 2,
    title: "How to Find the Right Therapist for You",
    summary: "Not every therapist is the right fit — here's how to know who is.",
    url: "https://example.com/articles/finding-a-therapist"
  },
  {
    id: 3,
    title: "Sliding Scale Therapy: What It Is and How to Find It",
    summary: "Affordable care is out there — here's how sliding scale therapy works.",
    url: "https://example.com/articles/sliding-scale-therapy"
  }
];

const getArticles = (req, res) => {
  res.status(200).json(articles);
};

module.exports = { getArticles };
