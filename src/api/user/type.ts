export interface LoginForm {
  username: string
  password: string
}

interface DataType {
  token?: string
  message?: string
}
export interface LoginResponse {
  code: number
  data: DataType
}

export interface UserInfoType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: [string]
  buttons: [string]
  routes: [string]
  token: string
}
interface UserType {
  checkUser: UserInfoType
}
export interface UserInfoResponse {
  code: number
  data: UserType
}
