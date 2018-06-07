<template>
    <div v-if="driversLoaded">
      <h5 class="mt-4">Kierowcy</h5>
      <table class="table table-hover" id="alldrivers">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Imię</th>
          <th scope="col">Nazwisko</th>
          <th scope="col">Telefon</th>
          <th scope="col">Email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="driver in drivers" v-bind:key="driver.id">
          <th scope="row">{{driver.id}}</th>
          <td>{{driver.name}}</td>
          <td>{{driver.surname}}</td>
          <td>{{driver.phone}}</td>
          <td>{{driver.email}}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from 'axios'
import API from '../../../api/endpoints'

export default {
  name: 'drivers',
  data () {
    return {
      drivers: [],
      driversLoaded: false
    }
  },
  methods: {
    getGrivers () {
      axios.get(API.USERS + '?type=driver')
        .then((response) => {
          this.driversLoaded = true
          this.drivers = response.data
        })
    }
  },
  mounted () {
    this.getGrivers()
  }
}
</script>
