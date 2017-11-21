import Vue from 'vue'
import App from './App.vue'

import VueMessage from './lib/index.js'
Vue.use(VueMessage, {background: 'rgba(0,0,0,0.5)'})

new Vue({
  el: '#app',
  render: h => h(App)
})
