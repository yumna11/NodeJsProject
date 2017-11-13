/*immporting http module*/
var http = require('http');
var fs = require('fs');
//404 response
function sendErrorResponse(response) {
    response.writeHead(404,{"Context-Type":"text/plain"});
    response.write("404, Page not found!");
    response.end();
}
//handle a user request
function onRequest(request,response) {
if (request.method == 'GET' && request.url == '/')
{
    response.writeHead(200,{"Context-Type":"text/html"});
    fs.createReadStream("./index.html").pipe(response);
}
else
{
    sendErrorResponse(response);
}
}
http.createServer(onRequest).listen(8888);
console.log("Server is now running...");