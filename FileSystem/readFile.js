var fs = require('fs');  //importing file system(fs) module
var data = fs.readFileSync('sample.txt');

console.log("Sync data: "+ data.toString());
console.log("END");

fs.readFile('sample.txt', function(err,data)
{
    if(err) {
        return console.log.error(err);
    }console.log("Asyn data: "+data.toString());
});