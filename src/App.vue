<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="本日のオーダー"/> -->
  <OrderList msg="@@@ 直近のオーダー @@@"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import OrderList from './components/OrderList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    OrderList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
