<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-faded">
    <a class="navbar-brand" href="#">BusSystem</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Kup bilet <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Przystanki </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Rozkłady jazdy </a>
        </li>
        <li v-if="!isLogged" class="nav-item">
          <a class="nav-link" href="#"> <router-link to="/login">Logowanie</router-link> </a>
        </li>
        <li v-if="!isLogged" class="nav-item">
          <a class="nav-link" href="#"> Rejestracja </a>
        </li>
        <li v-if="isLogged" class="nav-item">
          <a class="nav-link" v-on:click="logout"> Wyloguj [{{username}}] </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
</style>

<script>
import jwtDecoder from 'jwt-decode'
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['isLogged']),
    username: function () {
      let authToken = localStorage.getItem('token')
      if (authToken) {
        return jwtDecoder(authToken).sub
      }
      return ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
