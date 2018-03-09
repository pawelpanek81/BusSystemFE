<template>
  <div>
    <div class="form">
      login: <input v-model="credential.username" type="text"/>
      password: <input v-model="credential.password" type="password"/>
      <button v-on:click="login">Zaloguj</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credential: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.credential)
    }
  }
}
</script>

<style scoped>
</style>
