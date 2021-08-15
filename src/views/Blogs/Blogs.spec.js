import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import Blogs from '@/views/Blogs'
import Pagination from '@/components/Pagination'
import SearchForm from '@/components/SearchForm'
import SortForm from '@/components/SortForm'
import BlogItem from '@/views/Blogs/-components/BlogItem'

const getBlogs = jest.spyOn(Blogs.methods, 'getBlogs').mockResolvedValue()

describe('Blogs.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Blogs, wrapperOps)
  })

  afterEach(() => {
    wrapper.vm.$destroy()
  })

  describe('when Blogs was mounted', () => {
    it('should render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })

    it('should render child components', () => {
      expect(wrapper.findComponent(Pagination).exists()).toBeTruthy()
      expect(wrapper.findComponent(SearchForm).exists()).toBeTruthy()
      expect(wrapper.findComponent(SortForm).exists()).toBeTruthy()
      expect(wrapper.findComponent(BlogItem).exists()).not.toBeTruthy()
    })

    it('should call getBlogs first time', () => {
      expect(getBlogs).toHaveBeenCalledTimes(1)
    })
  })

  describe('watch paramsRequest', () => {
    it('should getBlogs called', async () => {
      await wrapper.setData({
        paramsRequest: {
          page: 2,
          search: 'book',
          order: 'desc'
        }
      })
      expect(getBlogs).toHaveBeenCalled()
    })
  })
})
