import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  // if (error.response) {
  //   const data = error.response.data
  //   const { code, message } = data
  // }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  return config
}, err)

// response interceptor
service.interceptors.response.use(({ data }) => {
  if (data.result) {
    return data
  }
  if (+data.code === 200) {
    return data.data
  }
  return Promise.reject(data)
}, err)

export default service
