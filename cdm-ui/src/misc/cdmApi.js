import axios from 'axios'
import { config } from './Constants'
// import { parseJwt } from './Helpers'

export const cdmApi = {
  authenticate,
  signup,
  updateUser,
  getUserMe,
  changePassword
}

function authenticate(username, password) {
  return instance.post('/auth/login', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
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

function getUserMe() {
  const accessToken = localStorage.getItem('accessToken')
  return instance.get('/auth/me', {
    params: {
      name: 'admin2'
    },
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
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