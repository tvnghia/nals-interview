import { shallowMount } from '@vue/test-utils'
import wrapperOps from '@/config-test/wrapper'
import SearchForm from '@/components/SearchForm'

const handleDebounceSearch = jest.spyOn(SearchForm.mixins[0].methods, 'handleDebounceSearch')

describe('SearchForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SearchForm, {
      ...wrapperOps
    })
  })

  afterEach(() => {
    wrapper.vm.$destroy()
  })

  describe('when SearchForm was mounted', () => {
    it('should SearchForm render correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when search blogs', () => {
    it('should call handleDebounceSearch', async () => {
      await wrapper.setData({ valueSearch: 'book' })
      expect(handleDebounceSearch).toHaveBeenCalled()
    })
  })
})
