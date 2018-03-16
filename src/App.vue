<template>
  <div id="app">
    <site-navbar></site-navbar>
    <site-messages :message="getMessage"
      v-if="showGlobalMessage"></site-messages>
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
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    siteFooter: Footer,
    siteNavbar: Navbar,
    siteMessages: SiteMessages
  },
  computed: {
    ...mapGetters(['getMessage']),
    showGlobalMessage: function () {
      return !!this.getMessage
    }
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
