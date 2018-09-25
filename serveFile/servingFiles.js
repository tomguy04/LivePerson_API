var http = require('http');
var fs = require('fs');
var path = require ('path');

http.createServer(function(req,res){
    console.log(`${req.method} request fro ${req.url}`);

    if (req.url === '/'){
        fs.readFile('./index.html','UTF-8', function(err,html){
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(html);
        })
    } else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('404 File Not Found');
    }
}).listen(3000);

console.log('Server listening on port 3000');