import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from './authTypes'
import { authReducers } from './authReducers'
import { RootState } from '../../store'

const user =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user') as string)
    : ''

const initialState: IAuthState = user
  ? {
      isLoggedIn: true,
      user: user
    }
  : {
      isLoggedIn: false,
      user: null
    }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers
})

export const { loginUser, logoutUser } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
