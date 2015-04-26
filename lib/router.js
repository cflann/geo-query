var handler = require('./handler');
var io = require('./server').io;

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

