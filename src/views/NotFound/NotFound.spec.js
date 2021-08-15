import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import NotFound from '@/views/NotFound'

describe('NotFound.vue', () => {
  const wrapper = shallowMount(NotFound, wrapperOps)

  describe('when NotFound was mounted', () => {
    it('should render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
