import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = process.env.VUE_APP_NALS_API_ENDPOINT
axios.defaults.headers.common['Accept'] = 'application/json'

axios.interceptors.response.use(
  function (response) {
    return response
  },

  function (error) {
    store.commit('flash/STORE_FLASH_MESSAGE', { message: error.message, variant: 'danger' })
    return Promise.reject(error)
  }
)

export default function apiCaller({ method = 'GET', url, params = null, data = null }) {
  return axios({
    method,
    url,
    params,
    data,
    headers: null
  })
}
