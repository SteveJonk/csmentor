import axios from 'axios'
import { config } from '../config/config'

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    'Content-type': 'application/json',
    'X-WP-Nonce': config.nonce,
  },
})

export default apiClient
