import axios from 'axios'
import { config } from './Constants'
// import { parseJwt } from './Helpers'

export const cdmApi = {
  authenticate,
  signup,
  updateUser,
  getUserMe,
  changePassword,
  loadCar,
  loadCarDetail
}

function authenticate(user) {
  return instance.post('/auth/login', user)
}

function signup(user) {
  return instance.post('/auth/register', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function updateUser(user) {
  return instance.post('/auth/updateUser', user, {
    headers: {
      'Authorization': bearerAuth(localStorage.getItem('accessToken'))
    }
  })
}

function changePassword(user) {
  return instance.patch('/auth/changePassword', user, {
    headers: {
      'Authorization': bearerAuth(localStorage.getItem('accessToken'))
    }
  })
}

function getUserMe(username) {
  const accessToken = localStorage.getItem('accessToken')
  return instance.get('/auth/me', {
    params: {
      name: username
    },
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

function loadCar() {
  return instance.get('/api/v1/products/getAllCars')
}

function loadCarDetail(id) {
  return instance.get('/api/v1/products/getCarById/' + {id})
}

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

// instance.interceptors.request.use(function (config) {
//   // If token is expired, redirect user to login
//   if (config.headers.Authorization) {
//     const token = config.headers.Authorization.split(' ')[1]
//     const data = parseJwt(token)
//     if (Date.now() > data.exp * 1000) {
//       window.location.href = "/login"
//     }
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// -- Helper functions

function bearerAuth(user) {
  return `Bearer ${user}`
}