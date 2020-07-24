import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333',
})

api.interceptors.request.use(req => {
  const token = localStorage.getItem('_token')

  if (!!token) {
    req.headers['Authorization'] = `Bearer ${JSON.parse(token)}`
  }

  return req
})

export default api
