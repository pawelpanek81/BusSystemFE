<template>
  <div>
    <div>
      <table class='table table-hover text-center' id='rides'>
        <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Linia</th>
          <th scope='col'>Wyjazd </th>
          <th scope='col'>Przyjazd</th>
          <th scope='col'>Bus</th>
        </tr>
        </thead>
        <tbody v-if='timetablesLoaded && timetables.length != 0'>
        <tr v-for='ride in timetables' v-bind:key='ride.id'>
          <th scope='row'>{{ride.id}}</th>
          <td>{{ride.busLine.name}}</td>
          <td>{{formatIsoTime(ride.startDateTime)[0]}}
            <br/> {{formatIsoTime(ride.startDateTime)[1]}}
          </td>
          <td>{{formatIsoTime(ride.endDateTime)[0]}}
            <br/> {{formatIsoTime(ride.endDateTime)[1]}}
          </td>
          <td>{{handleEmptyBusData(ride.bus)}}</td>
         </tr>
        </tbody>
      </table>
    </div>
    <div v-if='timetablesLoaded && timetables.length === 0'
         class="d-flex justify-content-center m-4">
      Brak pasujących wyników
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import api from '../../../api/endpoints'
export default {
  data () {
    return {
      timetablesLoaded: false,
      timetables: []
    }
  },
  methods: {
    getRides () {
      axios.get(api.DRIVER_RIDES)
        .then((response) => {
          console.log(response.data)
          this.timetables = response.data
          this.timetablesLoaded = true
        })
    },
    formatIsoTime (time) {
      let readableDate = moment(time, moment.ISO_8601).format('DD-MM-YYYY')
      let readableTime = moment(time, moment.ISO_8601).format('HH:mm')
      return [readableDate, readableTime]
    },
    handleEmptyBusData (bus) {
      if (bus == null || bus === '') {
        return 'Brak danych'
      } else {
        return bus.brand + ' ' + bus.model + ' ' + bus.registrationNumber
      }
    }
  },
  mounted () {
    this.getRides()
  }
}
</script>

<style scoped>

</style>
