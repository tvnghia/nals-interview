import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import BlogItem from '@/views/Blogs/-components/BlogItem'

const propsData = {
  blog: {
    content: 'content',
    createdAt: '2020-09-08T12:51:36.252Z',
    id: '1',
    image: 'http://lorempixel.com/640/480/abstract',
    title: 'Oklahoma'
  }
}

Object.assign(wrapperOps, { propsData })

describe('BlogItem.vue', () => {
  const wrapper = shallowMount(BlogItem, wrapperOps)

  describe('when BlogItem was mounted', () => {
    it('should BlogItem render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
