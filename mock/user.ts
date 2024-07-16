function createUserList() {
  return [
    {
      userId: 1,
      avatar: 'https://joeschmoe.io/api/v1/random',
      username: 'admin',
      password: '123456',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'admin-token'
    },
    {
      userId: 2,
      avatar: 'https://joeschmoe.io/api/v1/random',
      username: 'system',
      password: '123456',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.edit', 'cuser.delete'],
      routes: ['home'],
      token: 'syatem-token'
    }
  ]
}

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find(
        (item) => item.username === username && password === item.password
      )
      if (!checkUser) {
        return {
          code: 201,
          data: { message: '账号或密码不正确' }
        }
      }
      const { token } = checkUser
      return {
        code: 200,
        data: {
          token
        }
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    timeout: 2000,
    response: (request) => {
      const token = request.headers.token
      const checkUser = createUserList().find((item) => item.token === token)
      if (!checkUser) {
        return {
          code: 201,
          data: { message: '账号或密码不正确' }
        }
      }
      return {
        code: 200,
        data: {
          checkUser
        }
      }
    }
  }
] as MockMethod[]
