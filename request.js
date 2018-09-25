var https = require('https');
var fs = require ('fs');
const util = require('util');

var options = {
    // hostname: 'en.wikipedia.org',
    hostname: 'api.liveperson.net',
    port: 443, //80 for http
    // path: '/wiki/George_Washington',
    // path: '/api/account/92081759/service/agentVep/baseURI.json?version=1.0',
    //path: '/api/account/92081759/service/msgHist/baseURI.json?version=1.0', //returns the domain as JSON.baseURI
    path: '/api/account/92081759/service/smt/baseURI.json?version=1.0', //returns the domain as JSON.baseURI
    
    // path: '/messaging_history/api/account/92081759/conversations/search?offset=0&limit=50',
    method: 'GET'
};

function more(data){
    console.log(`******************the MORE Function ${util.inspect(data)}`)
    var req = https.request(data,(res)=>{
        console.log('**************response started');
        console.log(`**************server status : ${res.statusCode}`);
        console.log(`**************header start ${util.inspect(res.headers)} header end`)

        res.setEncoding('UTF-8');
        res.on('data',(d) =>{
            console.log(`the new data is ${d}`);
        })
    })
    req.on('error',function(err){
        console.log(`problem with request: ${err.message}`)
    })
    
    req.end()
}

var req = https.request(options, (res) => {
    console.log('response started');
    console.log(`server status : ${res.statusCode}`);
    // console.log(`response headers: ${res.headers|JSON}`)
    console.log(`header start ${util.inspect(res.headers)} header end`)

    res.setEncoding('UTF-8');
    res.on('data',(d) =>{
        console.log(`data start ${d} data end`);
        // const domain = d.baseURI;
        var obj = JSON.parse(d);
        var domain = obj.baseURI
        console.log (`the base URI /domain is ${domain}`)
        console.log(`attempting to access conversations`);
        var newOptions = {
            //hostname: domain,port: 443, path: '/messaging_history/api/account/92081759/agent-view/status',  method: 'POST'
            hostname: domain,port: 80, path: '/operations/api/account/92081759/',  method: 'POST'
        }
        // more(newOptions);
    })
});

req.on('error',function(err){
    console.log(`problem with request: ${err.message}`)
})

req.end()

