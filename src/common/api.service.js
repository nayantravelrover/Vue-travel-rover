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
        axios(config).then(
            (response) => {
                var result = response;
                result["config"] = config
                resolve(result);
            },
                (error) => {
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
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    });
}
  
export { getAPIService, postAPIService }
