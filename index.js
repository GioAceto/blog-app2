const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');

app.use(express.static('public'));

app.set('view engine', 'ejs');

PORT = 4000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/about.html'))
});

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
});

app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/post.html'))
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});