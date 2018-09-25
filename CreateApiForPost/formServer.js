var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if (req.method === 'GET'){ //get request sends the form to the use
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('./form.html','UTF-8').pipe(res);
    } else if (req.method ==='POST'){ //post request send the form data back to the user screen
        var body = '';
        req.on('data', function(chunk){
            body+=chunk;
        });
        req.on('end', function(){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(`
               <!DOCTYPE html>
               <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Your Form Results</h1>
                        <p>${body}</p>
                    </body>
                </html>
            `)
        })
    }

}).listen(3000);

console.log('Form Server listening on port 3000');