import { CSRF_TOKEN } from './csrf_token.js'
import {LocalStorage, SessionStorage} from 'quasar'
import { defineAsyncComponent } from 'vue'

function getAPIService(endpoint, headers, data){
  var axios = require('axios');

  var config = {
    method: 'get',
    url: endpoint,
    headers: { 
      'Content-Type': 'application/json'
    }
  };

  return new Promise(function (resolve, reject) {
        console.log("LOLOL")
        console.log(config)
        axios(config).then(
            (response) => {
                console.log("Here")
                var result = response;
                result["config"] = config
                console.log('Processing Request');
                resolve(result);
            },
                (error) => {
                console.log("Inside Error")
                reject(error);
            }
        );
    });
}

function postAPIService(endpoint, headers, data){
  var axios = require('axios');
  var data = JSON.stringify(data);
  var config = {
      method: 'post',
      url: endpoint,
      headers: headers,
      data : data
  };
  return new Promise(function (resolve, reject) {
        axios(config).then(
            (response) => {
                var result = response;
                result["config"] = config
                console.log('Processing Request');
                resolve(result);
            },
                (error) => {
                console.log("Inside Error")
                reject(error);
            }
        );
    });
}
  
export { getAPIService, postAPIService }
