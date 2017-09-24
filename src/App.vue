<template>
  <div id="app">
    <img src="./assets/logo.png">
    <slideshow></slideshow>
  </div>
</template>

<script>
import Slideshow from './components/Slideshow'

export default {
  name: 'app',
  components: {
    Slideshow
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
  margin-top: 60px;
}
</style>
