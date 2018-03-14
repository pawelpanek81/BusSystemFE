<template>
  <div id="app">
    <site-navbar></site-navbar>
    <site-messages></site-messages>
    <transition name="fade">
      <router-view/>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
