<template>
  <div id="app">
    <site-navbar></site-navbar>
    <router-view/>
    <hr />
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
}
</style>
