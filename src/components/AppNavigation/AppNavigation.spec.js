import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import AppNavigation from '@/components/AppNavigation'

describe('AppNavigation.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppNavigation, wrapperOps)
  })

  afterEach(() => { wrapper.vm.$destroy() })

  describe('when AppNavigation was mounted', () => {
    it('should AppNavigation render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
