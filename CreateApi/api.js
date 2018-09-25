var http = require('http');
var data = require('./inventory.json'); //the api data

http.createServer(function(req,res){
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/json'}); //api header
        res.end(JSON.stringify(data)); //api data object
    } else if (req.url ==='/instock'){
        listInStock(res);
    } else if (req.url ==='/onorder'){
        listOnBackOrder(res);
    } else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Whoops...Data not found');
    }
    

}).listen(3000);

console.log('Server listening on port 3000');

// functions to serve different data
function listInStock(res){
    let inStock = data.filter((item)=>{
        //return a true of false as to whether to add a new item to the array, is it in stock?
        return item.avail === 'In stock'; //returns the item if the avail key reads 'In stock'
    });
    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
    let onOrder = data.filter((item)=>{
        return item.avail === 'On back order';
    });
    res.end(JSON.stringify(onOrder));
}