var http = require("http");
var fs = require("fs");
http.createServer(function(req,res)
{
    fs.rename('sample.txt', 'newSample.txt', function(err)
    {
      if(err)
      {
         return console.log.error(err);
      }
      res.write("Renamed Successfully");
      res.end();
    });
}).listen(8080);