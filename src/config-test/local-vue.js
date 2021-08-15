import { createLocalVue } from '@vue/test-utils'
import filters from '@/filters'

const localVue = createLocalVue()

localVue.prototype.$filters = filters

export default localVue
