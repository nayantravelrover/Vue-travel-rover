import { getAPIService,postAPIService } from './api.service'

const base_url = 'http://admin.travelrover.in/'

function basicconfig () {
  const endpoint = base_url + 'travel-rover/basic-config/'
  var headers = {
    'Content-Type': 'application/json'
  }
  return new Promise(function (resolve, reject){
    var result =  getAPIService(endpoint,headers, null).then(response =>{
    resolve(response);
  })
  .catch(err =>{
    reject(err)
    console.log(err)
  })
  });
}


function load_place_itinerary_data(place,date){
  const endpoint = base_url + 'travel-rover/getcards/?place_name=' + place.trim() + "&date=" + date
  var headers = {
    'Content-Type': 'application/json'
  }
  
  return new Promise(function (resolve, reject){
    var result =  getAPIService(endpoint,headers, null).then(response =>{
    
    resolve(response);
  })
  .catch(err =>{
    reject(err)
    console.log(err)
  })
  });
}

function check_if_access_token_is_valid(){
    var endpoint = base_url + 'api/v1/users/me/'
    var access_token = window.localStorage.getItem("travel_rover_access");
    var refresh_token = window.localStorage.getItem("travel_rover_refresh_token");
    var headers = { 
        'Authorization': 'Bearer ' + access_token,
        'Content-Type': 'application/json'
        }
    return new Promise(function (resolve, reject){
    var result =  getAPIService(endpoint,headers, null).then(response =>{
      resolve(response);
    })
    .catch(err =>{
      reject(err)
      console.log(err)
    })
    });
}


function check_if_refresh_token_is_valid(){
  var endpoint = base_url + 'api/v1/jwt/refresh/'
  var refresh_token = window.localStorage.getItem("travel_rover_refresh_token");
  var data = {
    "refresh": refresh_token
  }
  var headers = {
    'Content-Type': 'application/json'
  }
  var result = postAPIService(endpoint,headers, data)
  return result
  }






function places (place,date) {
  var endpoint = base_url + 'travel-rover/places/?place=' + place + "&date=" + date;
  var headers = {
    'Content-Type': 'application/json'
  }
  return new Promise(function (resolve, reject){
    var result =  getAPIService(endpoint,headers, null).then(response =>{
    
    resolve(response);
  })
  .catch(err =>{
    reject(err)
    console.log(err)
  })
  });
}


function setAccessToken(data){
  let access_token = data["access"]
  let refresh_token = data["refresh"]
  window.localStorage.setItem("travel_rover_access", access_token);
  window.localStorage.setItem("travel_rover_refresh_token", refresh_token);
}

function save_itinerary_api(data, access_token){
  var endpoint = base_url + 'travel-rover/placesitinerary/'
  var data = data
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  var result = postAPIService(endpoint,headers, data).then(response => {
    if(response.status == 201){
        alert("Succesfully saved")
        console.log(response)
        var itinerary_pk = response.data["id"]
        window.location.href = "/#/itinarybuilder/?pk=" + itinerary_pk
        window.location.reload()
      }
    })
    .catch(err => {
      console.log(err)
      if(err.response.status == 400){
        alert("Not saved")
      }
    })
}



function create_user(data){
  var endpoint = base_url + 'api/v1/users/'
  var data = data
  var headers = {
    'Content-Type': 'application/json'
  }
  var result = postAPIService(endpoint,headers, data)
  return result
  }

function user_login(data){
  var endpoint = base_url + 'api/v1/jwt/create/'
  var data = data
  var headers = {
    'Content-Type': 'application/json'
  }
  var result = postAPIService(endpoint,headers, data)
  return result
}

function subscribe_user(access_token){
  var endpoint = base_url + 'travel-rover/update-subscribe/'
  var data = {}
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  var result = postAPIService(endpoint,headers, data)
  return result
}

function liked_itinerary(data,access_token){
  var endpoint = base_url + 'travel-rover/like-itinerary/'
  var data = data
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  var result = postAPIService(endpoint,headers, data)
  return result
}

function viewed_itinerary_api(data,access_token){
  var endpoint = base_url + 'travel-rover/viewed-itinerary/'
  var data = data
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  var result = postAPIService(endpoint,headers, data)
  return result
}

function created_itinerary_api(data,access_token){
  var endpoint = base_url + 'travel-rover/get-created-itineraries/'
  var data = data
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  var result = postAPIService(endpoint,headers, data)
  return result
}

function my_itinerary(data,access_token){
  var endpoint = base_url + 'travel-rover/get-itinerary/'
  var data = data
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  var result = postAPIService(endpoint,headers, data)
  return result
}



function get_liked_itineraries(access_token){
  const endpoint = base_url + 'travel-rover/get-liked-itineraries/'
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  
  return new Promise(function (resolve, reject){
    var result =  getAPIService(endpoint,headers, null).then(response =>{
    
    resolve(response);
  })
  .catch(err =>{
    reject(err)
    console.log(err)
  })
  });
}

function get_viewed_itineraries(access_token){
  const endpoint = base_url + 'travel-rover/get-viewed-itineraries/'
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
  
  return new Promise(function (resolve, reject){
    var result =  getAPIService(endpoint,headers, null).then(response =>{
    
    resolve(response);
  })
  .catch(err =>{
    reject(err)
    console.log(err)
  })
  });
}



export {
  places,
  base_url,
  create_user,
  basicconfig,
  save_itinerary_api,
  load_place_itinerary_data,
  setAccessToken,
  check_if_access_token_is_valid,
  check_if_refresh_token_is_valid,
  user_login,
  subscribe_user,
  liked_itinerary,
  viewed_itinerary_api,
  get_liked_itineraries,
  get_viewed_itineraries,
  created_itinerary_api,
  my_itinerary
}
