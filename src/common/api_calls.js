import { getAPIService,postAPIService } from './api.service'

const base_url = 'http://admin.travelrover.in/'

function basicconfig () {
  const endpoint = base_url + 'travel-rover/basic-config/'
  var headers = {
    'Content-Type': 'application/json'
  }
  return getAPIService(endpoint,headers, null)
}

function setAccessToken(data){
  let access_token = data["access"]
  let refresh_token = data["refresh"]
  window.sessionStorage.setItem("travel_rover_access", access_token);
  window.sessionStorage.setItem("travel_rover_refresh_token", refresh_token);
}




function create_user(data){
  var endpoint = base_url + 'api/v1/users/'
  var data = data
  var headers = {
    'Content-Type': 'application/json'
  }
  var result = postAPIService(endpoint,headers, data).then(response => {
    if(response.status == 201){
      console.log(response)
      
      var username = JSON.parse(response.config.data).username
      var password = JSON.parse(response.config.data).password

      var endpoint_token = base_url + 'api/v1/jwt/create/'
      var data_token = {"username" : username, "password": password}
      var create_token = postAPIService(endpoint_token, headers, data_token).then(response => {
        if(response.status == 200){
          setAccessToken(response.data)
        }else{
          alert("The system seems to be under maintainence");
        }
      }).catch(err => {
        alert("There is some error.")
      })
      
      alert("Succesfully registered");
      }
    })
    .catch(err => {
      console.log(err)
      if(err.response.status == 400){
        alert(err.response.data.username[0])
      }
    })
}




export {
  base_url,
  create_user,
  basicconfig
}
