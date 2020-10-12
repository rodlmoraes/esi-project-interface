import axios from 'axios'

const baseURL = false // process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000/api'
  : 'https://salutis.herokuapp.com/api'

const api = axios.create({
  baseURL,
})

export default api
