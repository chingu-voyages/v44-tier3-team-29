interface IUser {
  uid: string
  username: string
  email: string
}

export interface IUserState {
  token: string
  user: IUser
}

export interface IAuthState {
  isLoggedIn: boolean
  user: IUser | null
}

export type TAuthPayload = IUserState
