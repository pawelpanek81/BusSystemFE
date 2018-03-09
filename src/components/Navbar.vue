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
        <li class="nav-item">
          <a class="nav-link" href="#"> <router-link to="/login">Logowanie</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/registration">Rejestracja</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="isLogged" v-on:click="logout"> Wyloguj </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: mapGetters([
    'isLogged'
  ]),
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
