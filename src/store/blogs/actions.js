import Services from '@/services'
import { STORE_BLOGS, STORE_BLOG_DETAIL } from '../mutation-types'

const BlogsServices = Services.get('Blogs')

const actions = {
  getBlogs({ commit }, params) {
    return BlogsServices.getBlogs(params).then((res) => {
      commit(STORE_BLOGS, res.data)

      return res
    })
  },

  getBlogDetail({ commit }, params) {
    return BlogsServices.getBlogDetail(params).then((res) => {
      commit(STORE_BLOG_DETAIL, res.data)

      return res
    })
  }
}

export default actions
