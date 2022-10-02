import { CSRF_TOKEN } from './csrf_token.js'
import {LocalStorage, SessionStorage} from 'quasar'

function getAPIService(endpoint, headers, data){
  var axios = require('axios')
  var config = {
    method: "GET",
    url: endpoint,
    params: data,
    headers:headers
  }
  return axios(config)
    .then(function(response){
      let resp = response;
      console.log(resp);
      return resp;
    })
}

import { defineAsyncComponent } from 'vue'

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
