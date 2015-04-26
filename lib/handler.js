// Initialize the proximity module with our redis client
var proximity = require('geo-proximity').initialize(require('./server').client);

// Add a recurring radial geo query
// id: unique identifier for query
// coords: latitude and longitude for center of geo query
// radius: radius for geo query in meters
exports.addQuery = function(id, coords, radius) {
};

// Remove a recurring radial geo query
// id: unique identifier for query
exports.removeQuery = function(id) {
};

// Create or update latitude and longitude of a particular query
// id: unique identifier for query
// coords: latitude and longitude for center of query
exports.setKey = function(id, coords) {
};

// Remove key from redis store
// id: unique identifier for query
exports.removeKey = function(id) {
};

