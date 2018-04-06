<template>
  <div>
    <h5>Dodaj nowy pojazd</h5>
    <div class="row mt-4">
      <div class="col-3">
        <label for="busRegistrationNr">Numer rejestracyjny </label>
        <input type="text" class="form-control form-control-sm" id="busRegistrationNr"
               name="busRegistrationNr"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busRegistrationNr')}"
               v-model="bus.registrationNumber"
               data-vv-as="numer rejestracyjny">
        <span v-show="errors.has('busRegistrationNr')"
              class="invalid-feedback">{{ errors.first('busRegistrationNr') }}</span>
      </div>
      <div class="col-3">
        <label for="busBrand">Marka pojazdu </label>
        <input type="text" class="form-control form-control-sm" id="busBrand"
               name="busBrand"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busBrand')}"
               v-model="bus.brand"
               data-vv-as="markę pojazdu">
        <span v-show="errors.has('busBrand')"
              class="invalid-feedback">{{ errors.first('busBrand') }}</span>
      </div>
      <div class="col-3">
        <label for="busModel">Model pojazdu </label>
        <input type="text" class="form-control form-control-sm" id="busModel"
               name="busModel"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busModel')}"
               v-model="bus.model"
               data-vv-as="model pojazdu">
        <span v-show="errors.has('busModel')"
              class="invalid-feedback">{{ errors.first('busModel') }}</span>
      </div>
      <div class="col-3">
        <label for="busSeats">Liczba miejsc siedzących </label>
        <input type="number" min="0" max="300" class="form-control form-control-sm" id="busSeats"
               name="busSeats"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busSeats')}"
               v-model="bus.seats"
               data-vv-as="liczbę miejsc siedzących">
        <span v-show="errors.has('busSeats')"
              class="invalid-feedback">{{ errors.first('busSeats') }}</span>
      </div>

    </div>
    <div class="row mt-4">
      <div class="col-12 text-center">
        <button type="button" id="registerBusButton" class="btn btn-outline-success" @click="validateForm">Dodaj pojazd</button>
      </div>
    </div>
    <h5 class="mt-4">Wszystkie pojazdy</h5>
    <table v-if="busesLoaded" class="table table-hover" id="allbuss">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Numer rejestracji</th>
        <th scope="col">Marka</th>
        <th scope="col">Model</th>
        <th scope="col">Liczba miejsc</th>
        <th scope="col">Usuń</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bus in buses" v-bind:key="bus.id">
        <th scope="row">{{bus.id}}</th>
        <td>{{bus.registrationNumber}}</td>
        <td>{{bus.brand}}</td>
        <td>{{bus.model}}</td>
        <td>{{bus.seats}}</td>
        <td>
          <button class="btn btn-outline-warning" @click="ensure2(bus)">
            Usuń
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import CFG from '../../../api/config'
import swal from 'sweetalert'

export default {
  name: 'buses',
  data () {
    return {
      buses: [],
      busesLoaded: false,
      bus: {
        registrationNumber: '',
        brand: '',
        model: '',
        seats: 0
      }
    }
  },
  methods: {
    getBuses () {
      axios.get(`${CFG.API_BASE_URL}/buses`)
        .then((response) => {
          this.busesLoaded = true
          this.buses = response.data
        })
        .catch(function () {})
    },
    ensureDeletingBus (bus) {
      let busInfo = bus.registrationNumber + ' ' + bus.brand + ' ' + bus.model
      this.$modal.show('dialog', {
        title: 'Usuń pracownika',
        text: `Czy na pewno chcesz usunąć pojazd ${busInfo} z bazy?`,
        buttons: [
          {
            title: 'Usuń',
            handler: () => {
              this.deleteBus(bus.id)
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Wróć',
            default: true,
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    },
    ensure2 (bus) {
      let busInfo = bus.registrationNumber + ' ' + bus.brand + ' ' + bus.model
      swal({
        text: `Czy na pewno chcesz usunąć pojazd ${busInfo} z bazy?`,
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.deleteBus(bus.id)
            swal('Usunięto', {
              icon: 'success'
            })
          }
        })
    },
    deleteBus (id) {
      this.$store.dispatch('deleteBus', id).then(() =>
        this.getBuses()
      )
    },
    validateForm () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            let dto = this.bus
            this.registerBus(dto)
            this.resetInputs()
          }
        })
    },
    registerBus (bus) {
      this.$store.dispatch('registerBus', bus)
        .then(() =>
          this.getBuses()
        )
    },
    resetInputs () {
      this.bus = {
        registrationNumber: '',
        brand: '',
        model: '',
        seats: 0
      }
      this.$validator.reset()
    }
  },
  mounted () {
    this.getBuses()
  }
}
</script>
