<template>
  <div class="container">
    <div id="message" class="alert alert-success fade show" role="alert"
         @click="closeMessage"
         v-if="show">
      {{ this.getMessage }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  methods: {
    closeMessage () {
      $('#message').alert('dispose')
      this.$store.dispatch('clearMessage')
    }
  },
  computed: {
    ...mapGetters(['getMessage']),
    show: function () {
      return !!this.getMessage
    }
  }
}
</script>
