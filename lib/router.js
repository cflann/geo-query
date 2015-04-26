var handler = require('./handler');
var io = require('./server').io;

// Listen for user connections via sockets
io.on('connection', function(socket) {
  console.log('A user connected');

  // Handle radial query registration
  socket.on('add_query', function(obj) {
    handler.addQuery(obj.id, obj.coords, obj.radius);
  });

  // Handle radial query removal
  socket.on('remove_query', function(obj) {
    handler.removeQuery(obj.id);
  });

  // Handle key registration and updating
  socket.on('set_key', function(obj) {
    handler.setKey(obj.id, obj.coords);
  });

  // Handle key removal
  socket.on('remove_key', function(obj) {
    handler.removeKey(obj.id);
  });

  // Handle client disconnect
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

