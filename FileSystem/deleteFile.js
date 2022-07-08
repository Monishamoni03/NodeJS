var http = require("http");
var fs = require("fs");
http.createServer(function(req,res)
{
    fs.unlink('deletingFile.txt', function(err)
    {
      if(err)
      {
         return console.log.error(err);
      }
      res.write("File deleted Successfully");
      res.end();
    });
}).listen(8080);