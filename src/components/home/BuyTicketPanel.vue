<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-6 card p-3">
        <h3 class="mb-0 mb-4">Twoje dane</h3>
        <div class="form-group">
          <span>Imię</span>
          <input type="text" :disabled="!updateClicked" v-model="userData.name"
                 class="form-control"
                 name="inputName"
                 v-validate="'required'"
                 :class="{'is-invalid': errors.has('inputName')}"
                 data-vv-as="imię">
          <transition enter-active-class="animated fadeIn">
                      <span v-show="errors.has('inputName')"
                            class="invalid-feedback">{{ errors.first('inputName') }}</span>
          </transition>
        </div>
        <div class="form-group">
          <span>Nazwisko</span>
          <input type="text" :disabled="!updateClicked" v-model="userData.surname"
                 class="form-control"
                 name="inputSurname"
                 v-validate="'required'"
                 :class="{'is-invalid': errors.has('inputSurname')}"
                 data-vv-as="nazwisko">
          <transition enter-active-class="animated fadeIn">
                      <span v-show="errors.has('inputSurname')"
                            class="invalid-feedback">{{ errors.first('inputSurname') }}</span>
          </transition>
        </div>
        <div class="form-group">
          <span>Email</span>
          <input type="text" :disabled="!updateClicked" v-model="userData.email" class="form-control"
                 name="inputEmail"
                 v-validate="'required|email'"
                 :class="{'is-invalid': errors.has('inputEmail')}"
                 data-vv-as="email">
          <transition enter-active-class="animated fadeIn">
                      <span v-show="errors.has('inputEmail')"
                            class="invalid-feedback">{{ errors.first('inputEmail') }}</span>
          </transition>
        </div>
        <div class="form-group">
          <span>Telefon</span>
          <input type="text" :disabled="!updateClicked" v-model="userData.phone"
                 class="form-control"/>
        </div>
      </div>
      <div class="col-6 card p-3">
        <h3 class="mb-0 mb-4">Dane dotyczące biletu</h3>
        <div class="row m-1">
          <div>
            <h3>Wyjazd</h3>
            <p>{{from.city}}, {{from.name}}</p>
            <p>{{from.address}}</p>
            <p><b>{{formatDateTime(ride.startDateTime)}}</b></p>
          </div>
        </div>
        <div class="row m-1">
          <div>
            <h3>Przyjazd</h3>
            <p>{{to.city}}, {{to.name}}</p>
            <p>{{to.address}}</p>
            <p><b>{{formatDateTime(ride.endDateTime)}}</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row card p-3">
      <div class="row mr-1 mt-5 d-flex justify-content-end">
        <div class="text-right">
          <h5>Cena jednego biletu: {{ride.price}}</h5>
          <h5>Liczba pasażerów: {{nrOfPassengers}}</h5>
          <hr/>
        </div>
      </div>
      <div class="row mr-1 d-flex justify-content-end">
        <div class="my-3">
          <h3>Łącznie do zapłaty: {{totalPrice}} zł</h3>
        </div>
      </div>
      <div class="row mr-1">
        <div class="col-6 offset-6 d-block text-right justify-content-end p-0">
          <button @click="ensureBuyingATicket" class="btn btn-success mx-2">Kupuję bilet</button>
          <router-link to="/">
            <button class="btn btn-outline-success mx-2">Powrót</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../../api/endpoints'
import {mapGetters} from 'vuex'
import moment from 'moment'

export default {
  props: ['ride', 'nrOfPassengers', 'from', 'to'],
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
    ...mapGetters(['getUserId', 'isLogged']),
    totalPrice: function () {
      return this.nrOfPassengers * this.ride.price
    }
  },
  methods: {
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
    },
    formatDateTime (time) {
      let convertedTime = moment(time, moment.ISO_8601).format('D MMM YYYY HH:mm')
      return convertedTime
    },
    ensureBuyingATicket () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
          }
        })
    }
  },
  mounted () {
    if (!this.ride) {
      this.$router.push('/search')
    }
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
