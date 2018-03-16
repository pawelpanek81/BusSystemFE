<template>
  <nav class="navbar navbar-light navbar-expand-lg mt-2">
    <div class="container">
      <router-link class="navbar-brand" to="/"><h3>BusSystem</h3></router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNav" >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/buy-ticket">Kup bilet</router-link>
              <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/bus-stops">Przystanki</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/time-tables">Rozkłady jazdy</router-link>
          </li>
          <li v-if="!isLogged" class="nav-item">
              <router-link class="nav-link" to="/login">Logowanie</router-link>
          </li>
          <li v-if="!isLogged" class="nav-item">
              <router-link class="nav-link" to="/registration">Rejestracja</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto dropdown" v-if="isLogged">
          <div class="dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user userIcon"></i>
          </div>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <router-link class="dropdown-item" to="/user/tickets">Bilety</router-link>
            <a class="dropdown-item" href="#">Konto</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="logout"> Wyloguj [{{username}}] </a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
  .userIcon {
    font-size: 200%;
    cursor: pointer;
    color: grey
  }
  .dropdown-item.active, .dropdown-item:active {
    background-color: green;
  }
</style>
<script>
import jwtDecoder from 'jwt-decode'
import {mapGetters} from 'vuex'

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
