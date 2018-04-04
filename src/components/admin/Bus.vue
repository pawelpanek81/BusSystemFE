<template>
  <div v-if="busesLoaded" class="jumbotron-fluid justify-content-center mt-3 mx-5 mb-5">
    <div class=" row p-5">
      <div class="col-8">
        <h3>Lista wszystkich pracowników</h3>
      </div>
      <div class="col-4">
        <router-link to="/admin/addbus"><button class="btn btn-outline-dark float-right">Dodaj nowy pojazd</button></router-link>
      </div>
    </div>
    <v-dialog/>
    <table class="table table-hover" id="allbuss">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Numer rejestracji</th>
        <th scope="col">Marka</th>
        <th scope="col">Model</th>
        <th scope="col">Usuń</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bus in buses" v-bind:key="bus.id">
        <th scope="row">{{bus.registration_number}}</th>
        <td>{{bus.brand}}</td>
        <td>{{bus.model}}</td>
        <td>
          <button class="btn btn-outline-warning" @click="ensureDeletingBus(bus.registration_number
          +' '+bus.brand+' '+bus.model, bus.id)">Usuń</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import axios from 'axios'
import CFG from '../../config'

export default {
  name: 'buses',
  data () {
    return {
      buses: [],
      busesLoaded: false
    }
  },
  methods: {
    getBuses () {
      let vm = this
      axios.get(`${CFG.API_BASE_URL}/buses`)
        .then(function (response) {
          if (response.status === 200) {
            console.log('buses ', response.data)
            vm.busesLoaded = true
            vm.buses = response.data
          }
        })
        .catch(function (error) {
          console.log('error', error)
        })
    },
    ensureDeletingBus (bus, id) {
      let vm = this
      this.$modal.show('dialog', {
        title: 'Usuń pracownika',
        text: `Czy na pewno chcesz usunąć pojazd ${bus} z bazy?`,
        buttons: [
          {
            title: 'Usuń',
            handler: () => {
              vm.deleteBus(id)
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
    deleteBus (id) {
      axios.delete(`/buses/${id}`)
        .then(function (response) {
          if (response.status === 200) {
            console.log('deleted', response.status)
          }
        })
        .catch(function (error) {
          console.log('error', error)
        })
    }
  },
  mounted () {
    this.getBuses()
  },
  updated () {
    this.getBuses()
  }
}
</script>

<style>
</style>
