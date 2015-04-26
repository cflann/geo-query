// Our "geo-proximity" library runs on a redis cache
var redis = require('redis');
exports.client = redis.createClient();

// We'll communicate with our client in real-time using socket.io
// wrapped around an express server.
var app = require('express')();
var http = require('http').Server(app);
exports.io = require('socket.io')(http);
exports.app = app;
exports.http = http;

