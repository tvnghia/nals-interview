import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import blogs from './blogs'
import flash from './flash'

Vue.use(Vuex)

const debug = process.env.VUE_APP_NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    blogs,
    flash
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
