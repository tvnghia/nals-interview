import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import MainLayout from '@/layouts/MainLayout'

const scopedSlots = {
  default: '<p class="default-scoped">Scope slot</p>'
}

Object.assign(wrapperOps, { scopedSlots })

describe('MainLayout.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(MainLayout, wrapperOps)
  })

  afterEach(() => wrapper.vm.$destroy())

  describe('when MainLayout was mounted', () => {
    it('should render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })

    it('should render slot', () => {
      expect(wrapper.find('p.default-scoped').exists()).toBeTruthy()
    })
  })
})
