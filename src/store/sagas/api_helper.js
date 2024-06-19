import { message } from "antd";
import axios from "axios"
// import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
// const token = accessToken

//apply base url for axios
const API_URL = ""

const axiosApi = axios.create({
  baseURL: API_URL,
})

// axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    message.error('No se puede procesar la petición!');
    Promise.resolve(error)
  }
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  }
}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data).catch(error => {
    })
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
