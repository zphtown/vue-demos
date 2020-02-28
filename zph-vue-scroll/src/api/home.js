import request from '@/assets/js/request'
import {commonParams, options} from './config'
import jsonp from '@/assets/js/jsonp'
import { shuffle } from '@/assets/js/helpers'

export function apiHomeBanner() {
  return request({
    method: 'get',
    url: '/home/slider'
  }).then(res => {
    let sliders = res.slider
    let one = sliders[Math.floor(Math.random() * sliders.length)]
    sliders = sliders.filter(() => Math.random() > 0.5)
    sliders = shuffle(sliders)
    if (!sliders.length) {
      sliders = one
    }
    return sliders
  }).catch(() => {
    // console.log('http error ========')
    // console.log(err)
    return [{
      linkUrl: 'http://www.imooc.com',
      picUrl: require('@/assets/imgs/404.jpg')
    }]
  }).then((data) => {
    return new Promise((resolve) => {
      // 模拟延迟
      setTimeout(_ => {
        resolve(data)
      }, 100)
    })
  })
}

// export function apiHomeBanner() {
//   return axios.get('http://www.imooc.com/api/home/slider', {
//     timeout: TIMEOUT
//   }).then(({ data }) => {
//     if (data.code === OK_CODE) {
//       let sliders = data.slider
//       let one = sliders[Math.floor(Math.random() * sliders.length)]
//       sliders = sliders.filter(() => Math.random() > 0.5)
//       sliders = shuffle(sliders)
//       if (!sliders.length) {
//         sliders = one
//       }
//       return sliders
//     }
//     throw new Error('没有成功获取到数据')
//   }).catch(() => {
//     // console.log('http error ========')
//     // console.log(err)
//     return [{
//       linkUrl: 'http://www.imooc.com',
//       picUrl: require('@/assets/imgs/404.jpg')
//     }]
//   }).then((data) => {
//     return new Promise((resolve) => {
//       // setTimeout(_ => {
//       resolve(data)
//       // }, 111000)
//     })
//   })
// }

export function apiHots({page = 1, size = 10}) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: size,
    pagenum: page,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}
