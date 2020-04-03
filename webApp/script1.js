var http = require('http');
var server = http.createServer(engine);

server.listen(13337, function(){
    console.log('Server was hit by a request');
});


function engine(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});

    response.end('Hey from server!');

}