import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import Pagination from '@/components/Pagination'

const clickPagination = jest.spyOn(Pagination.methods, 'clickPagination')

describe('Pagination.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Pagination, wrapperOps)
  })

  afterEach(() => {
    wrapper.vm.$destroy()
  })

  describe('when Pagination was mounted', () => {
    it('should Pagination render corectly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when switch page', () => {
    it('should call clickPagination method', async () => {
      wrapper.find('li').trigger('click')
      await wrapper.vm.$nextTick()

      expect(clickPagination).toHaveBeenCalled()
      expect(wrapper.emitted('input')).toHaveLength(1)
      expect(wrapper.emitted('input')[0]).toEqual([1])
    })
  })
})
