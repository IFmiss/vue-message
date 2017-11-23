<template>
  <div id="app">
    <button @click="defaultMsg">默认提示</button>
    <button @click="zMsg">自定义提示</button>
    <button @click="bgMsg">背景改变提示</button>
    <button @click="durMsg">时长控制</button>
    <button @click="topMsg">显示位置Top</button>
    <button @click="centerMsg">显示位置Center</button>
    <button @click="callbackMsg">msg消失之后的回调</button>
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
      this.$msg({background:'radial-gradient(rgba(4,12,6,0.3), #F1DCAB);'})
    },
    zMsg () {
      this.$msg('你好  你好啊!')
    },
    durMsg () {
      this.$msg({text: '我设置了时长为1000ms',duration: 1000})
    },
    topMsg () {
      this.$msg({position: 'top'})
    },
    centerMsg () {
      this.$msg({position: 'center'})
    },
    callbackMsg () {
      this.$msg({position: 'center', duration: 1000}, () => {
        alert('这是Vue-Message结束之后的回调')
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
  // margin-top: 60px;
  width:100%;
  height:100%;
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

body,html{
  min-width: 100vw;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: -webkit-linear-gradient(to right, #EF629F, #EECDA3);
  background: linear-gradient(to right, #EF629F, #EECDA3);
  font-weight: lighter;
  font-size: 10px;
  overflow:hidden;
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
