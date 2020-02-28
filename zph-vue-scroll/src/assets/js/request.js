import axios from 'axios'
import {OK_CODE, TIMEOUT} from './config'
const instance = axios.create({
  baseURL: 'http://www.imooc.com/api',
  timeout: TIMEOUT
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function ({data}) {
  // Do something with response data
  if (data.code) {
    if (data.code === OK_CODE) {
      return data
    } else {
      return Promise.reject(new Error(data))
    }
  } else {
    return data
  }
}, function (error) {
  return Promise.reject(error)
})

export default instance
