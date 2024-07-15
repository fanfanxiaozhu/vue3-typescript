import request from '@/utils/request'
import type { LoginForm, LoginResponse, UserInfoResponse } from './type'

enum API {
  LOGIN_URL = '/api/user/login',
  USERINFO_URL = '/api/user/info'
}

export const reqLogin = (data: LoginForm) => request.post<any, LoginResponse>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get<any, UserInfoResponse>(API.USERINFO_URL)
