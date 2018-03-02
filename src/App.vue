<template>
  <div id="app">
    <site-navbar></site-navbar>
    <img src="./assets/logo.png">
    <router-view/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    siteFooter: Footer,
    siteNavbar: Navbar
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
