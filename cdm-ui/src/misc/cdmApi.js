import axios from "axios";
import { config } from "./Constants";
// import { parseJwt } from './Helpers'

export const cdmApi = {
  authenticate,
  signup,
  updateUser,
  getUserMe,
  getAllUsers,
  changePassword,
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  createOrder,
  getAllInventory,
  getShopByType,
  getShopById,
  getOrderByUserId,
  createCustomerReport,
  getCustomerReport,
  getPublicChat,
}

function authenticate(user) {
  return instance.post("/auth/login", user);
}

function signup(user) {
  return instance.post("/auth/register", user, {
    headers: { "Content-type": "application/json" },
  });
}

function updateUser(user) {
  return instance.post("/auth/updateUser", user, {
    headers: {
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}

function changePassword(user) {
  return instance.patch("/auth/changePassword", user, {
    headers: {
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}

function getUserMe(username) {
  const accessToken = localStorage.getItem("accessToken");
  return instance.get("/auth/me", {
    params: {
      name: username,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function getAllUsers() {
  return instance.get("/auth/getAllUsers", {
    headers: {
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}
function getAllCars() {
  return instance.get("/api/v1/products/getAllCars");
}

function getCarById(params) {
  return instance.get(
    "/api/v1/products/getCarById/" + params
  );
}

function getOrderByUserId(params) {
  return instance.get("/api/v1/orders/getOrderByUserId", {
    params: {
      email: params,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
}

function createCar(carData) {
  return instance.post(
    "/api/v1/products/createCar",
    carData,
    {
      headers: {
        Authorization: bearerAuth(localStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    }
  );
}

function createOrder(orderData) {
  return instance.post(
    "/api/v1/orders/createOrder",
    orderData,
    {
      headers: {
        Authorization: bearerAuth(localStorage.getItem("accessToken"))
      },
    }
  );
}

function updateCar(carData) {
  return instance.put(
    "/api/v1/products/updateCar",
    carData,
    {
      headers: {
        Authorization: bearerAuth(localStorage.getItem("accessToken")),
        "Content-Type": "application/json",
      },
    }
  );
}

function deleteCar(id) {
  return instance.delete(
    `/api/v1/products/deleteCar/${id}`,
    {
      headers: {
        Authorization: bearerAuth(localStorage.getItem("accessToken")),
      },
    }
  );
}

function getAllInventory() {
  return instance.get("/api/v1/inventory/getInventory", {
    headers: {
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}

function getShopByType(type) {
  return instance.get(`/api/v1/products/getShopByType/${type}`, {
    headers: {
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}

function createCustomerReport(report) {
  return instance.post("/api/v1/reports", report, {
    headers: { 
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}

function getCustomerReport() {
  return instance.get("/api/v1/reports", {
    headers: { 
      Authorization: bearerAuth(localStorage.getItem("accessToken")),
    },
  });
}

function getShopById(id) {
  return instance.get('http://localhost:9296/api/v1/products/getShopById/' + id);
}

function getPublicChat() {
  return axios.get("localhost:8080/api/chat/public-messages");
}

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
});

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
  return `Bearer ${user}`;
}
