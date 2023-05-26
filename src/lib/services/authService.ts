import axios from 'axios'

interface IUser {
  email: string
  password: string
  confirmPassword: string
}

export const authService = () => {
  const login = async (data: Omit<IUser, 'confirmPassword'>) => {
    try {
      const res = await axios.post('url', data)

      console.log('Login>>>', res.data)
      if (res.data.succss) {
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
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
  }

  const register = async (data: IUser) => {
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
    }
  }

  return { login, logout, register }
}
