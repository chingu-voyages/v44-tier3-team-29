import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user') as string)

  if (user && user.token) {
    config.headers['Authorization'] = `Bearer ${user.token}`
  }

  return config
})

axiosInstance.interceptors.response.use(config => {
  const user = JSON.parse(localStorage.getItem('user') as string)

  if ([401, 403].includes(config.status) && user) {
    // TODO: auto log out if receive 401 or 403 response
  }

  return config
})

export default axiosInstance
