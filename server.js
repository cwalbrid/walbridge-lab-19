var http = require('http');
var myModule = require('./module')
 

 http.createServer(function(request, response) {
   response.writeHead(200, { "Content-type": "text/plain" });
   // response.write('Lab 19!');
   response.write(myModule.randomQuote());
   response.end();
   

   
 

 }).listen(8888)

 