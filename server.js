'use strict';

// Load dependencies
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Define connection to local postgres host
const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();

// Define a port
const PORT = process.env.PORT || 3000;

// Include the static resources as an argument for app.use()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// Routes
app.get('/admin', function(request, response) {
  response.sendFile('public/admin.html', {root: '.'});
});

app.get('/index', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.get('*', function(request, response) {
  console.log('page not found');
  response.send('Page not found');
});

// Routes for getting data
app.get('/blogposts', function(request, response) {
  client.query(`
    CREATE TABLE IF NOT EXISTS blogposts (
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255) NOT NULL,
      category VARCHAR(20),
      "publishedDate" DATE,
      "postContent" TEXT NOT NULL);`
  )
  console.log('table created');
  client.query('SELECT * FROM blogposts', function(err, result) { // Make a request to the DB
    if (err) console.error(err);
    response.send(result.rows);
  });
});

// Logs a console message to say which port the server has begun using
app.listen(PORT, function() {
  console.log('app is running on localhost:3000');
});
