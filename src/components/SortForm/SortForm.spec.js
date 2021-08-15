import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import SortForm from '@/components/SortForm'

describe('SortForm.vue', () => {
  let wrapper

  beforeEach(async () => {
    wrapper = shallowMount(SortForm, wrapperOps)
  })

  afterEach(() => {
    wrapper.vm.$destroy()
  })

  describe('when SortForm was mounted', () => {
    it('should SortForm render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when sort', () => {
    it('should emit sort value', async () => {
      await wrapper.setData({ picked: 'desc' })
      expect(wrapper.emitted('input')).toHaveLength(1)
      expect(wrapper.emitted('input')[0]).toEqual(['desc'])
    })
  })
})
