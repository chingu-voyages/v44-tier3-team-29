import { useAppDispatch } from '@store/store'
import {
  TUserLoginData,
  TUserRegisterData,
  authService
} from '../services/authService'
import { loginUser, logoutUser } from '../store/features/auth/authSlice'
import { useToast } from './useToast'
import { useRouter } from 'next/router'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { addNewToast } = useToast()
  const router = useRouter()

  const login = async (loginData: TUserLoginData) => {
    const res = await authService.login(loginData)

    if (res.success) {
      dispatch(loginUser(res.message))
      router.push('/')
      addNewToast({ type: 'success', message: 'Welcome to Artemis.' })
    } else {
      addNewToast({ type: 'warning', message: res.message })
    }
  }

  const logout = () => {
    const res = authService.logout()

    if (res.success) {
      dispatch(logoutUser())

      addNewToast({ type: 'success', message: res.message })
    } else {
      addNewToast({ type: 'warning', message: res.message })
    }
  }

  const register = async (registerData: TUserRegisterData) => {
    const res = await authService.register(registerData)

    if (res.success) {
      router.push('/sign-in')
      addNewToast({
        type: 'success',
        message: 'Your account was registered successfully.'
      })
    } else {
      addNewToast({ type: 'warning', message: res.message })
    }
  }

  return { login, logout, register }
}
