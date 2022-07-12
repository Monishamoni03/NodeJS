var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    console.log('Request: ' +req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream('/read.txt', 'utf-8');
    readStream.pipe(res);
});

server.listen(8080);
console.log('Hey friends!');