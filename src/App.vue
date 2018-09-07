<template>
  <div id="app">
    <my-header></my-header>
    <router-view :key="key"/>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
export default {
  name: 'App',
  components:{
     MyHeader
  },
  computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
    margin:0;
    padding:0;
}
</style>
