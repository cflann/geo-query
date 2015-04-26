// Our "geo-proximity" library runs on a redis cache
var redis = require('redis');
var client = redis.createClient();

// We'll communicate with our client in real-time using socket.io
// wrapped around an express server.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Initialize the proximity module with our redis client
var proximity = require('geo-proximity').initialize(client);

// Handler includes logic for user/cache lifecycle events
var handler = require('./lib/handler');

// Set up a basic webpage to serve for testing purposes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Listen for user connections via sockets
io.on('connection', function(socket) {
  console.log('A user connected');

  // Handle radial query registration
  socket.on('add_query', handler.addQuery);

  // Handle radial query removal
  socket.on('remove_query', handler.removeQuery);

  // Handle key registration and updating
  socket.on('set_key', handler.setKey);

  // Handle key removal
  socket.on('remove_key', handler.removeKey);

  // Handle client disconnect
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

// Start up the server
http.listen(3000, function() {
  console.log('Listening on port 3000');
});

