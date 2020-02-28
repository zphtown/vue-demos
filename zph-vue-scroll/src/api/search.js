import request from '@/assets/js/request'
import jsonp from '@/assets/js/jsonp'

export function apiSearchHot() {
  return request({
    method: 'get',
    url: '/search/hot'
  }).then((res) => {
    return new Promise((resolve) => {
      // 模拟延迟
      setTimeout(_ => {
        resolve(res)
      }, 10)
    })
  })
}

export function apiSearchResult(keyword) {
  return jsonp('https://suggest.taobao.com/sug', {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  }).then((res) => {
    return new Promise((resolve) => {
      // 模拟延迟
      setTimeout(_ => {
        resolve(res.result)
      }, 10)
    })
  })
}
