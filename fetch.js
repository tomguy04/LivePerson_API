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
      })
   
    .catch(err => console.error(err));