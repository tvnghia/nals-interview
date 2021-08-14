import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'

import './scss/index.scss'

Vue.prototype.$filters = filters

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
