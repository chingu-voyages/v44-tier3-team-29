import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, TAuthPayload } from './authTypes'

const loginUser: CaseReducer<IAuthState, PayloadAction<TAuthPayload>> = (
  state,
  action
) => {
  const { user } = action.payload

  return { ...state, isLoggedIn: true, user: user }
}

const logoutUser: CaseReducer<IAuthState> = (state, action) => {
  return { ...state, isLoggedIn: false, user: null }
}

export const authReducers = {
  loginUser,
  logoutUser
}
