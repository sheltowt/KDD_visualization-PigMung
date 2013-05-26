var http = require('http');
var handler = require('./data_transfer.js');

var port = 8080;
var ip = '127.0.0.1';

handler.openConnection();
var server = http.createServer(handler.handleRequest);

server.listen(port, ip);