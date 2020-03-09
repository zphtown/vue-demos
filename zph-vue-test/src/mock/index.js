import Mock from 'mockjs'
import user from './user'
const prefix = '/dev-api'
const apis = [
  ...user
]
export default {
  mockData() {
    apis.map(api => {
      Mock.mock(
        new RegExp(prefix + api.url),
        api.type || 'get',
        options => {
          if (options.type === 'POST') {
            options.params = JSON.parse(options.body)
          }
          return api.response(options)
        }
      )
    })
    // Mock.mock('/dev-api/user/login', {
    //   'success': true,
    //   'result': {
    //     'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj'
    //   }
    // })
  }
}
