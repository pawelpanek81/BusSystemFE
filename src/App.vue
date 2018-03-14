<template>
  <div id="app">
    <site-navbar></site-navbar>
    <site-messages></site-messages>
    <router-view/>
    <hr />
    <site-footer></site-footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SiteMessages from './components/Sitemessages'
export default {
  name: 'App',
  components: {
    siteFooter: Footer,
    siteNavbar: Navbar,
    siteMessages: SiteMessages
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
