import Vue from 'vue'
import App from './App.vue'

import VueMessage from './lib/index.js'
Vue.use(VueMessage)

new Vue({
  el: '#app',
  render: h => h(App)
})
