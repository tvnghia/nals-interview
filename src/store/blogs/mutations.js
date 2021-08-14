import { STORE_BLOGS, STORE_BLOG_DETAIL } from '../mutation-types'

const mutations = {
  [STORE_BLOGS](state, payload) {
    state.blogs = payload
  },

  [STORE_BLOG_DETAIL](state, payload) {
    state.blog = payload
  }
}

export default mutations
