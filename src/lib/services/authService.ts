import axios from 'axios'

export type TUserRegisterData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type TUserLoginData = Omit<TUserRegisterData, 'confirmPassword'>

export const authService = {
  login: async (data: TUserLoginData) => {
    try {
      const res = await axios.post('url', data)

      console.log('Login>>>', res.data)
      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.message))
      }

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
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
      const res = await axios.post('url', data)

      console.log(res.data.message)

      return res.data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.status)
        console.error(err.response)
      } else {
        console.error(err)
      }

      return { success: false, message: err }
    }
  }
}
