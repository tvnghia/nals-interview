import blogs from '@/store/blogs'
import Services from '@/services'
import blogsData from '../mocks/blogs.api.js'

jest.mock('@/services/blogs')

const BlogsServices = Services.get('Blogs')
const { state, mutations, actions } = blogs
const commit = jest.fn()

describe('mutations', () => {
  const payload = [...blogsData.blogs]

  describe('STORE_BLOGS', () => {
    it('should store blogs list to state', () => {
      mutations.STORE_BLOGS(state, payload)

      expect(state.blogs).toEqual(payload)
    })
  })

  describe('STORE_BLOG_DETAIL', () => {
    it('should store blog detail to state', () => {
      mutations.STORE_BLOG_DETAIL(state, payload[0])

      expect(state.blog).toEqual(payload[0])
    })
  })
})

describe('actions', () => {
  const response = {
    data: [...blogsData.blogs]
  }

  it('should getBlogs called', async () => {
    BlogsServices.getBlogs.mockResolvedValue(response)
    await actions.getBlogs({ commit }, {})

    expect(commit).toHaveBeenCalledWith('STORE_BLOGS', response.data)
  })

  it('should getBlogDetail called', async () => {
    BlogsServices.getBlogDetail.mockResolvedValue(response)
    await actions.getBlogDetail({ commit }, {})

    expect(commit).toHaveBeenCalledWith('STORE_BLOG_DETAIL', response.data)
  })
})
