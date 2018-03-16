<template>
  <div class="container">
    <div id="message" class="alert alert-success fade show" role="alert"
         @click="closeMessage">
      {{ this.message }}
    </div>
  </div>
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
  },
  beforeDestroy () {
    this.$store.dispatch('clearMessage')
  }
}
</script>
