'use strict';

// Load dependencies
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();

// Define connection to local postgres host
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();

// Define a port
const PORT = process.env.PORT || 3000;

// Include the static resources as an argument for app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./Public'));

// proxy function
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// Routes
app.get('/github/*', proxyGitHub);
app.get('/admin', function(request, response) {
  response.sendFile('admin.html', {root: './Public'});
});

app.get('/index', function(request, response) {
  response.sendFile('index.html', {root: './Public'});
});

app.get('/journal', function(request, response) {
  response.sendFile('index.html', {root: './Public'});
});

app.get('/projects', function(request, response) {
  response.sendFile('index.html', {root: './Public'});
});

app.get('/', function(request, response) {
  response.sendFile('index.html', {root: './Public'});
});

// Routes for getting data
app.get('/blogposts', function(request, response) {
  console.log('on blogposts');
  client.query(
    `CREATE TABLE IF NOT EXISTS blogposts
    (post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    "publishedDate" DATE,
    "postContent" TEXT NOT NULL);`
  )
  console.log('table created');
  client.query('SELECT * FROM blogposts', function(err, result) {
    //if (err) console.error(err);
    console.log('result in second client query:', result.rows);
    response.send(result.rows);
  });
});

app.post('/blogposts', function(request, response) {
  client.query(
    `INSERT INTO
    blogposts (title, author, category, "publishedDate", "postContent")
    VALUES ($1, $2, $3, $4, $5);
    `,
    [
      request.body.title,
      request.body.author,
      request.body.category,
      request.body.publishedDate,
      request.body.postContent,
    ]
  );
  response.send('insert complete');
});

// 404
app.get('*', function(request, response) {
  console.log('page not found');
  response.send('Page not found');
});

// Logs a console message to say which port the server has begun using
app.listen(PORT, function() {
  console.log('app is running on localhost:3000');
});
