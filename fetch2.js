const fetch = require('node-fetch');
const util = require('util');

fetch('https://api.liveperson.net/api/account/92081759/service/smt/baseURI.json?version=1.0')
    // .then(res => (console.log(`server status : ${res.statusCode}`)))
    // .then(res => res.json())
    .then(res=>
        {
            (console.log(`server status : ${res.status}`));
            return res.json();
        })
    // .then((res) => {
    //     return res.json();
    //   })
      .then((json) => {
         console.log(json); // The json object is here
         var domain = json.baseURI;
         console.log(domain);
         fetch(`https://${domain}/operations/api/account/92081759/`)
        .then(console.log(`inner success`))
        .catch(err => console.error(`error fetching inner fetch${err}`))
        //  obj = JSON.parse(json)
        //  var domain = obj.baseURI
        //  console.log (`the base URI /domain is ${domain}`)
      })
    //   .then(
        
    //   )
   
    .catch(err => console.error(err));