<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
<<<<<<< HEAD

export default {
  name: 'app',
  data(){
    return {
      list:Array.from({length:20}, (i,a)=>Math.random())
    }
=======
  export default {
    name: 'app'
>>>>>>> 256c6c85e369cb9f74ef1ed5870bf1709e084b71
  }

</script>

<style>
<<<<<<< HEAD
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background:turquoise;
}
</style>
=======
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  body {
    background: pink;
  }
</style>
>>>>>>> 256c6c85e369cb9f74ef1ed5870bf1709e084b71
