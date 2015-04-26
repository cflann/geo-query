// Grab our http wrapper and express server
var http = require('./lib/server').http;
var app = require('./lib/server').app;

// Handler includes logic for user/cache lifecycle events
var handler = require('./lib/handler');

// Set up routing for web socket events
require('./lib/router');

// Set up a basic webpage to serve for testing purposes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Start up the server
http.listen(3000, function() {
  console.log('Listening on port 3000');
});

