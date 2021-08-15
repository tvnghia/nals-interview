import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import Home from '@/views/Home'

describe('Home.vue', () => {
  const wrapper = shallowMount(Home, wrapperOps)

  describe('when Home was mounted', () => {
    it('should Home render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
