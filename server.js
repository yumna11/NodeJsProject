var connect = require('connect');
var http = require('http');

var app = connect();

http.createServer(app).listen(8888);
console.log("Server is running ...");