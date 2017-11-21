<template>
  <div id="app">
    <button @click="defaultMsg">默认提示</button>
    <button @click="zMsg">自定义提示</button>
    <button @click="bgMsg">背景提示</button>
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
      this.$msg({background:'red'})
    },
    zMsg () {
      this.$msg('你好  你好啊!')
    },
    defaultMsg () {
      this.$msg()
    },
    defaultMsg () {
      this.$msg()
    }
  },
  mounted () {
    // this.$msg({text: 'aaa'})
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
  margin-top: 60px;
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
