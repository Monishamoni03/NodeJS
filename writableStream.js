var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/FileSystem/Message/read.txt', 'utf-8');
var writeStream = fs.createWriteStream(__dirname + '/write.txt');

readStream.on('data', function(chunk) {
    console.log('Chunk received');
    writeStream.write(chunk);
});