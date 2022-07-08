var http = require("http");
var fs = require("fs");
http.createServer(function(req,res)
{
    fs.open('newFile.txt', 'w+', function(err,fd)
    {
      if(err)
      {
         return console.log.error(err);
      }
      res.write("New File opened Successfully");
      res.end();
    });
}).listen(8080);