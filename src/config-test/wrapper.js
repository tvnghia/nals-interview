import localVue from './local-vue'

import store from '@/store'
import router from '@/router'

const wrapperOps = {
  store,
  router,
  localVue
}

export default wrapperOps
