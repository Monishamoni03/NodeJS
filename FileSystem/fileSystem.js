var http = require('http');
var fs = require('fs');

fs.readFile('./Message/read.txt', 'utf-8', function(err, message) {
    fs.writeFile('./Message/write.txt', message, (err) => {
        console.log(err);
    });
});