import {OK_CODE} from '@/assets/js/config'
import axios from 'axios'
let CancelToken = axios.CancelToken
let cancel

export function apiCategoryList(cateId) {
  cancel && cancel('被取消了')
  cancel = null
  return axios({
    url: 'http://www.imooc.com/api/category/content/' + cateId,
    method: 'get',
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  }).then((res) => {
    if (res.data.code === OK_CODE) {
      return res.data.content
    }
    throw new Error('没有获取到数据')
  }).catch(err => {
    // console.log('err')
    if (axios.isCancel(err)) {
      // console.log(err)
    } else {
      // console.log(err)
    }
    return Promise.reject(err)
  })
}
