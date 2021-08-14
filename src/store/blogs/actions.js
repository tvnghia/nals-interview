import Services from '@/services'
import { STORE_BLOGS } from '../mutation-types'

const BlogsServices = Services.get('Blogs')

const actions = {
  getBlogs({ commit }, params) {
    return BlogsServices.getBlogs(params).then((res) => {
      commit(STORE_BLOGS, res.data)

      return res
    })
  }
}

export default actions
