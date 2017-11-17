# vue-message
a vue2.0 plugin

## How To Use
* install vue-message plugin
<pre>
  npm install --save vue-message
</pre>

* main.js To Use
  <pre>
    import Vue form 'vue'
    import Toast from 'vue-message'

    Vue.use(Toast, {text: 'Hello world', duration: 3000, background: 'rgba(7,17,27,0.6)'})
  </pre>
* .vue To Use
  <pre>
    this.$toast('你好')    //  string  or object
  </pre>
