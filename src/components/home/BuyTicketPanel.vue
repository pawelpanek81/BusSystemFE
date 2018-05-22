<template>
  <div class="container p-5">
    <div class="row">
      <div class="card p-3 w-100">
        <h3 class="mb-0 mb-4 text-center">Twoje dane</h3>
        <div class="d-flex justify-content-around flex-wrap">
          <div class="form-group">
            <span>Imię</span>
            <input type="text" v-model="userData.name"
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
            <input type="text" v-model="userData.surname"
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
            <input type="text" v-model="userData.email" class="form-control"
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
            <input type="text" v-model="userData.phone"
                   class="form-control"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row card p-3">
      <div>
        <h3 class="mb-0 mb-4 text-center">Bilet w jedną stronę</h3>
        <div class="row d-flex justify-content-around">
          <div>
              <h3>Wyjazd</h3>
              <p>{{from.city}}, {{from.name}}</p>
              <p>{{from.address}} </p>
              <p><b>{{formatDateTime(rideTo.startDateTime)}}</b></p>
          </div>
            <div>
              <h3>Przyjazd</h3>
              <p>{{to.city}}, {{to.name}}</p>
              <p>{{to.address}} </p>
              <p><b>{{formatDateTime(rideTo.endDateTime)}}</b></p>
            </div>
          </div>
        </div>
    </div>
    <div v-if="rideFrom !== ''" class="row card p-3">
      <div>
        <h3 class="mb-0 mb-4 text-center">Bilet w drugą stronę</h3>
        <div class="row d-flex justify-content-around">
          <div>
            <h3>Wyjazd</h3>
            <p>{{to.city}}, {{from.name}}</p>
            <p>{{to.address}}</p>
            <p><b>{{formatDateTime(rideFrom.startDateTime)}}</b></p>
          </div>
          <div>
            <h3>Przyjazd</h3>
            <p>{{from.city}}, {{to.name}}</p>
            <p>{{from.address}}</p>
            <p><b>{{formatDateTime(rideFrom.endDateTime)}}</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row card p-3">
      <div class="row mr-1 mt-5 d-flex justify-content-end">
        <div class="text-right">
          <h5>Cena jednego biletu w jedną stronę: {{rideTo.price}}</h5>
          <h5 v-if="rideFrom != ''">Cena jednego biletu w drugą stronę: {{rideFrom.price}}</h5>
          <h5>Liczba pasażerów: {{nrOfPassengers}}</h5>
          <hr/>
        </div>
      </div>
      <div class="row mr-1 d-flex justify-content-end">
        <div class="my-3 text-right">
          <h3>Łącznie do zapłaty: {{totalPrice}} zł</h3>
        </div>
      </div>
      <div class="row mr-1">
        <div class="col-6 offset-6 d-block text-right justify-content-end p-0">
          <button @click="ensureBuyingATicket" class="btn btn-success mx-2">Kupuję bilet</button>
          <router-link to="/search">
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
import axios from 'axios'

export default {
  props: ['rideTo', 'rideFrom', 'nrOfPassengers', 'from', 'to'],
  data () {
    return {
      userData: {
        id: null,
        name: '',
        surname: '',
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getUserId', 'isLogged']),
    totalPrice: function () {
      let price = this.rideTo.price
      if (this.rideFrom !== '') {
        price += this.rideFrom.price
      }
      return price
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
      return moment(time, moment.ISO_8601).format('D MMM YYYY HH:mm')
    },
    ensureBuyingATicket () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.reserveTicket()
          }
        })
    },
    reserveTicket () {
      let ticketData = {
        email: this.userData.email,
        name: this.userData.name,
        phone: this.userData.phone,
        rideBackId: this.rideFrom !== '' ? this.rideFrom.rideId : null,
        rideToId: this.rideTo.rideId,
        seats: this.nrOfPassengers,
        surname: this.userData.surname,
        destinationBusStopId: this.to.id,
        fromBusStopId: this.from.id
      }
      axios.post(API.TICKETS, ticketData)
        .then((response) => {
          let paymentData = {
            departureTicket: {
              ticketId: response.data.toTicket,
              ticketPrice: this.rideTo.price
            },
            numberOfPassengers: this.nrOfPassengers,
            returnTicket: this.rideFrom !== '' ? {
              ticketId: response.data.backTicket,
              ticketPrice: this.rideFrom.price
            } : null,
            signature: 'Lubię spać'
          }
          axios.post(API.PAYMENTS, paymentData)
            .then((res) => {
              window.open(res.headers.location, '_blank')
            })
        })
    }
  },
  mounted () {
    if (!this.rideTo) {
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
  input {
    min-width: 200px;
  }
</style>
