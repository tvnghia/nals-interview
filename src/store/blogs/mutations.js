import { STORE_BLOGS } from '../mutation-types'

const mutations = {
  [STORE_BLOGS](state, payload) {
    state.blogs = payload
  }
}

export default mutations
