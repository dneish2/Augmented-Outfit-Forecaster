//Dark Sky Api Requests

let fetch = require('node-fetch');

let darksky = 'https://api.darksky.net/forecast/c9eff229d9e3b4b0f65ce1f916ee8145/';

let uri = darksky + '/' + coordinates;
console.log(uri);

let options = {
  method: 'GET'.
  mode: 'cors'
}

let req = new fetch.Request(uri, options);

fetch(req)
  .then((response)=>{
    if(response.ok){
      return response.json();
    }else{
      throw new Error('BAD HTTP DUDE!')

    }
    }
  })
  .then (j) =>{
    console.log('JSON data provided');
  })
