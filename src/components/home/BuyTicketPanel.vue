<template>
  <div class="container p-5">
    <h3 class="mb-0 mb-4">Twoje dane</h3>
    <div class="row m-2">
      <div class="col-6 p-0">Imię</div>
      <div class="col-6">
        <input type="text" :disabled="!updateClicked" v-model="userData.name"
               class="form-control"/>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-6 p-0">Nazwisko</div>
      <div class="col-6">
        <input type="text" :disabled="!updateClicked" v-model="userData.surname"
               class="form-control"/>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-6 p-0">Email</div>
      <div class="col-6">
        <input type="text" :disabled="!updateClicked" v-model="userData.email" class="form-control"/>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-6 p-0">Telefon</div>
      <div class="col-6">
        <input type="text" :disabled="!updateClicked" v-model="userData.phone"
               class="form-control"/>
      </div>
    </div>
    <h3 class="mb-0 mb-4 mt-4">Dane dotyczące biletu</h3>
    <div class="row m-1">
      <div class="col-6 p-0 d-flex justify-content-start">
        <div>
          <h3>Wyjazd</h3>
          <p><b>Rzeszów, Dworzec Główny</b></p>
          <p>5 maja 2018 12:15</p>
        </div>
      </div>
      <div class="col-6 p-0 d-flex justify-content-end">
        <div>
          <h3>Przyjazd</h3>
          <p><b>Tarnobrzeg, Dworzec Główny</b></p>
          <p>5 maja 2018 15:15</p>
        </div>
      </div>
    </div>
    <div class="row m-1 mt-5">
      <div class="col-4 p-0 d-flex justify-content-start">
        <h3>Cena biletu: 39.99zł</h3>
      </div>
      <div class="col-8 p-0 d-flex justify-content-end">
        <button id="updateOrSendButton" @click="updateOrSendData" class="btn btn-success mx-2">Kupuję bilet</button>
        <router-link to="/">
          <button class="btn btn-outline-success mx-2">Powrót</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../../api/endpoints'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      userData: {
        id: null,
        name: '',
        surname: '',
        email: '',
        phone: ''
      },
      updateClicked: true
    }
  },
  computed: {
    ...mapGetters(['getUserId', 'isLogged'])
  },
  methods: {
    updateOrSendData: function () {

    },
    putCursorAtEnd (input) {
      input.focus()
      let tmpStr = input.val()
      input.val('')
      input.val(tmpStr)
    },
    getLoggedUserData () {
      this.$http.get(`${API.USERS}/${this.getUserId}`)
        .then((response) => {
          this.userData = response.data
        })
        .catch(() => {
          this.$store.dispatch('setMessage', {text: 'Błąd ładowania danych', type: 'alert-danger'})
        })
    }
  },
  mounted () {
    if (this.isLogged) {
      this.getLoggedUserData()
    }
  }
}

</script>

<style scoped>
  .input:focus {
    border-color: #12b31c;
    box-shadow: 0 0 10px #129f1c;
  }
</style>
