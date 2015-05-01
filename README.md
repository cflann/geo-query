# geo-query
A web-socket event-based backend for storing geohashed keys and setting up proximity queries on them (a la GeoFire). Built with Node, Express, and socket.io.

Proximity queries and key tracking is done using the [node-geo-proximity](https://github.com/arjunmehta/node-geo-proximity) package, running on a Redis server.

## Usage
Getting set up is easy!

+Start a local Redis server with `redis-server`
+`npm install`
+`node index.js`
+Navigate to `localhost:3000` in your browser of choice!
