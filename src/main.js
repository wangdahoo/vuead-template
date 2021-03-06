// Stylesheets
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-default/index.css'

// Polyfill
import 'whatwg-fetch'
import assign from 'object-assign'
Object.assign = assign

// Global Mixins
import './mixins'

// Element UI
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// Router & Store
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
sync(store, router, 'router')

Vue.config.productionTip = false

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '[app]',
  router,
  store,
  template: '<App/>',
  components: { App }
})
