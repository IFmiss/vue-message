<template>
  <div id="app">
    <div class="content">
      <h1 class="title">Vue-message</h1>
      <button @click="defaultMsg">默认提示</button>
      <button @click="zMsg">自定义提示</button>
      <button @click="bgMsg">背景改变提示</button>
      <button @click="durMsg">时长控制</button>
      <button @click="topMsg">显示位置Top</button>
      <button @click="centerMsg">显示位置Center</button>
      <button @click="callbackMsg">msg消失之后的回调</button>
      <p class="link_code"><a href="http://www.github.com/ifmiss/vue-message" target="_black">http://www.github.com/ifmiss/vue-message</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    defaultMsg () {
      this.$msg()
    },
    bgMsg () {
      this.$msg({background:'radial-gradient(#41C3D0, #1CD980);',text: '我改变了背景色了哈哈哈，还是渐变色哦!'})
    },
    zMsg () {
      this.$msg('你好  你好啊!')
    },
    durMsg () {
      this.$msg({text: '我设置了我设置了时长为1000ms我设置了时长为1000ms我设置了时长为1000ms时长为1000ms',duration: 1000})
    },
    topMsg () {
      this.$msg({position: 'top'})
    },
    centerMsg () {
      this.$msg({position: 'center',background: '#000'})
    },
    callbackMsg () {
      this.$msg({position: 'center', duration: 1000}, () => {
        this.$msg('这是Vue-Message结束之后的回调,在前一个msg消失的时候触发')
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  user-select:none;
  min-width: 100vw;
  min-height: 100vh;
  background: -webkit-linear-gradient(to right, #EF629F, #EECDA3);
  background: linear-gradient(to right, #EF629F, #EECDA3);
  font-weight: lighter;
  font-size: 10px;
  margin:0;
  padding:0;
}

.content{
  width:100%;
  height:auto;
  position:absolute;
  top:50%;
  transform:translate(0,-50%);
}

button{
  padding: 5px 15px;
  border:none;
  border-radius:4px;
  outline:0 none;
  color:#f0f0f0;
  margin:10px 5px;
  background:rgba(233,233,233,0.3);
  cursor:pointer;
  &:hover{
    background:rgba(233,233,233,0.4);
  }
}

.link_code{
  margin-top: 30px;
  a{
    font-size: 16px;
    color:#eee;
  }
}

.title{
  font-size:38px;
  font-weight:600;
  color:#f0f0f0;
  margin:-30px auto 50px auto;
}

body,html{
  user-select:none;
  min-width: 100vw;
  min-height: 100vh;
  margin:0;
  padding:0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
