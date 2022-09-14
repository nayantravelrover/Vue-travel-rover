import { apiService } from './api.service'

const base_url = 'http://admin.travelrover.in/'
// const base_url = 'http://localhost:9000'
// const base_websocket_url = 'localhost:9000'
//
function basicconfig () {
  const endpoint = base_url + 'travel-rover/basic-config/'
  return apiService(endpoint, 'GET', null)
}

function signup (userdetails) {
  const endpoint = base_url + 'api/v1/users/'
  return apiService(endpoint, 'POST', userdetails)
}

function login (userdetails) {
  const endpoint = base_url + 'api/v1/jwt/create/'
  return apiService(endpoint, 'POST', userdetails)
}


function userdetails () {
  const endpoint = base_url + 'api/v1/users/me/'
  return apiService(endpoint, 'GET', null)
}
//
export {
  base_url,
  login,
  signup,
  userdetails,
  basicconfig
}
