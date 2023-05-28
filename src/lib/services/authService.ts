import axios from 'axios'

export type TUserRegisterData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type TUserLoginData = Omit<TUserRegisterData, 'confirmPassword'>

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'

export const authService = {
  login: async (data: TUserLoginData) => {
    try {
      const res = await axios.post(BASE_URL + '/api/auth/login', data)

      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.message))
      }

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  },

  logout: () => {
    localStorage.removeItem('user')

    const user = JSON.parse(localStorage.getItem('user') as string)

    if (user) {
      return { success: false, message: 'Something went wrong while logout.' }
    }

    return { success: true, message: 'Logged out successfully.' }
  },

  register: async (data: TUserRegisterData) => {
    try {
      const res = await axios.post(BASE_URL + '/api/auth/register', data)

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return { success: false, message: err.response?.data.message }
      } else {
        return { success: false, message: 'Sozz something went wrong...' }
      }
    }
  }
}
