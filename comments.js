// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');
const fs = require('fs');

// Body parser
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const { body } = req;
  comments.push(body);
  fs.writeFileSync('./comments.json', JSON.stringify(comments, null, 2));
  res.json(body);
});

// Start web server
app.listen(3000, () => {
  console.log('Web server is running.');
}); 
