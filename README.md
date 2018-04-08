# vue-message
A prompt component based on vue2.0
QQ交流群： 424418160

## DEMO
  http://www.daiwei.org/components/vue-message

## How To Use
* install vue-message plugin
<pre>
  npm install --save vue-message
</pre>

* main.js To Use
  <pre>
    import Vue form 'vue'
    import Msg from 'vue-message'
    Vue.use(Msg, {
      text: 'Hello world', duration: 3000, background: 'rgba(7,17,27,0.6)'
    })
  </pre>
* .vue To Use
  <pre>
    // this.$toast('你好')    //  string  or object  (version  0 - 1.1.5)
    this.$msg('Hello')        // ### 1.2.0 after 
	this.$msg({text:'未曾遗忘的青春', background: 'red'})
  </pre>

  ### 1.2.0 +   ===>  $msg
  ### 1.2.0 -   ===>  $toast

  1.2.2
  update readme
  add demo link
