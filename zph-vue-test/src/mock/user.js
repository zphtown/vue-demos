import { returnData, returnError } from './util'

const Admin = {
  token: 'admin-token'
}

export default [
  {
    url: '/user/login',
    type: 'post',
    response: options => {
      const { username } = options.params
      if (username === 'admin') {
        return returnData({
          token: Admin.token
        })
      } else {
        return returnError('账号或者密码错误')
      }
    }
  }
]
