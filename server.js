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

// Logs a console message to say which port the server has begun using
app.listen(PORT, function() {
  console.log('app is running on localhost:3000');
});
