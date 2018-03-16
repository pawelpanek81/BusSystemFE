<template>
  <transition name="fade">
    <div class="container">
      <div id="message" class="alert alert-success fade show" role="alert"
           @click="closeMessage">
        {{ this.message }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    closeMessage () {
      this.$store.dispatch('clearMessage')
    }
  },
  mounted () {
    setTimeout(this.closeMessage, 3000)
  },
  beforeDestroy () {
    this.$store.dispatch('clearMessage')
  }
}
</script>
