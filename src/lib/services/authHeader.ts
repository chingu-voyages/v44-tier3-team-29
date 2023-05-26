import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log('Requesting to>>>', config.url)

  const user = JSON.parse(localStorage.getItem('user') as string)

  if (user && user.token) {
    // TODO: auth header for outgoing requests
    config.headers['Authorization'] = `Bear ${user.token}`
  }

  return config
})

axios.interceptors.response.use(config => {
  console.log('Response received.')

  const user = JSON.parse(localStorage.getItem('user') as string)

  if ([401, 403].includes(config.status) && user) {
    // TODO: auto log out if receive 401 or 403 response
  }

  return config
})
