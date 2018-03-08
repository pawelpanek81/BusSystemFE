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
import CFG from '../config'
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
      this.$http.post(`${CFG.API_BASE_URL}/login`, this.credential)
        .then(response => {
          if (response.status === 200) {
            console.log(response)
          } else if (response.status === 401) {
            console.log('bledne dane')
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
