var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/FileSystem/Message/read.txt', 'utf-8');

readStream.on('data', function(chunk) {
    console.log('Chunk received:');
    console.log(chunk);
});