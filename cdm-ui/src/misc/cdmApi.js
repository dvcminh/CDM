import axios from 'axios'
import { config } from './Constants'
// import { parseJwt } from './Helpers'

export const cdmApi = {
  authenticate,
  signup,
  updateUser,
  getUserMe,
  changePassword,
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  createOrder,
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

function getAllCars() {
  return instance.get('http://localhost:9296/api/v1/products/getAllCars');
}

function getCarById(params) {
  return instance.get('http://localhost:9296/api/v1/products/getCarById/' + params);
}

function createCar(carData) {
  return instance.post('http://localhost:9296/api/v1/products/createCar', carData, {
    headers: {
      'Authorization': bearerAuth(localStorage.getItem('accessToken')),
      'Content-Type': 'application/json'
    }
  });
}

function createOrder(orderData) {
  return instance.post('http://localhost:9296/api/v1/orders/createOrder', orderData, {
    headers: {
      'Authorization': bearerAuth(localStorage.getItem('accessToken')),
      'Content-Type': 'application/json'
    }
  });
}

function updateCar(carData) {
  return instance.put('http://localhost:8083/api/v1/products/updateCar', carData, {
    headers: {
      'Authorization': bearerAuth(localStorage.getItem('accessToken')),
      'Content-Type': 'application/json'
    }
  });
}

function deleteCar(id) {
  return instance.delete(`http://localhost:8083/api/v1/products/deleteCar/${id}`, {
    headers: {
      'Authorization':  bearerAuth(localStorage.getItem('accessToken'))
    }
  });
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