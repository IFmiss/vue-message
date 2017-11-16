import Vue from 'vue'
import App from './App.vue'

import VueMessage from './lib/toast.js'
Vue.use(VueMessage, {text: 'aaa'})

new Vue({
  el: '#app',
  render: h => h(App)
})
