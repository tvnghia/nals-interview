import apiCaller from './api-caller'

const RESOURCES = Object.freeze({
  blogs: '/blogs'
})

export default {
  getBlogs(params) {
    return apiCaller({ method: 'GET', url: RESOURCES.blogs, params: { ...params, limit: 10, sortBy: 'createdAt' } })
  },

  getBlogDetail(id) {
    return apiCaller({ method: 'GET', url: `${RESOURCES.blogs}/${id}` })
  }
}
