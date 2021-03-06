<template>
  <div>
    <div class="container">
      <div class="mt-4 mb-5">
        <connection-searcher-panel/>
        <br/>
        <div class="mt-3" v-if="searchResultsLoaded">
          <div>
            <div class="d-flex justify-content-center mb-3">
              <h3>
                {{busStopFrom.city}} {{busStopFrom.name}}
                <i class="fas fa-long-arrow-alt-right"></i>
                {{busStopTo.city}} {{busStopTo.name}}
              </h3>
            </div>
            <div class="d-flex justify-content-center mb-2">
              <h5>{{formatDate(startTime)}}</h5>
            </div>
            <div v-if="searchResults.departurePossibilities.length !== 0">
              <table class="table table-md-responsive text-center">
                <thead>
                <tr>
                  <th scope="col">Godzina odjazdu</th>
                  <th scope="col">Godzina przyjazdu</th>
                  <th scope="col">Cena</th>
                  <th scope="col">Wybierz bilet</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="result in searchResults.departurePossibilities" v-bind:key="result.rideId">
                  <td>{{formatTime(result.startDateTime)}}</td>
                  <td>{{formatTime(result.endDateTime)}}</td>
                  <td>{{result.price}}</td>
                  <td>
                    <label>
                      <input class="form-check-input" type="radio" v-model="ticketTo" name="ticketTo"
                             v-bind:value="result">
                    </label>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center mt-4" v-else>
              <p class="no-results">Brak przejazdów na wybranej trasie w określonym dniu</p>
            </div>
          </div>
          <div v-if="endTime != null" class="mt-5">
            <div class="d-flex justify-content-center mb-3">
              <h3>
                {{busStopTo.city}} {{busStopTo.name}}
                <i class="fas fa-long-arrow-alt-right"></i>
                {{busStopFrom.city}} {{busStopFrom.name}}
              </h3>
            </div>
            <div class="d-flex justify-content-center mb-2">
              <h5> {{formatDate(endTime)}}</h5>
            </div>
            <div v-if="searchResults.returnPossibilities.length !== 0">
              <table class="table table-md-responsive text-center">
                <thead>
                <tr>
                  <th scope="col">Godzina odjazdu</th>
                  <th scope="col">Godzina przyjazdu</th>
                  <th scope="col">Cena</th>
                  <th scope="col">Wybierz bilet</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="result in searchResults.returnPossibilities" v-bind:key="result.rideId">
                  <td>{{formatTime(result.startDateTime)}}</td>
                  <td>{{formatTime(result.endDateTime)}}</td>
                  <td>{{result.price}}</td>
                  <td>
                    <label>
                      <input class="form-check-input" type="radio" v-model="ticketFrom" name="ticketFrom"
                             v-bind:value="result">
                    </label>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center" v-else>
              <p class="no-results"> Brak przejazdów powrotnych na wybranej trasie w określonym dniu </p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <router-link :to="{name: 'BuyTicket',
                       params: {rideTo: ticketTo, rideFrom: ticketFrom, nrOfPassengers: nrOfPassengers, from: busStopFrom, to: busStopTo}}">
              <button class="btn btn-success" :disabled="!atLeastOneTicketChosen">
                Przejdź do podsumowania
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!redirected">
      <map-component/>
    </div>
  </div>
</template>

<script>
import ConnectionSearcherPanel from '../../components/home/ConnectionsSearcherPanel'
import axios from 'axios'
import api from '../../api/endpoints'
import moment from 'moment'
import MapComponent from '../../pages/footer/MapComponent'

export default {
  props: ['from', 'to', 'startTime', 'endTime', 'nrOfPassengers'],
  components: {
    ConnectionSearcherPanel,
    MapComponent
  },
  data () {
    return {
      redirected: true,
      searchResults: [],
      searchResultsLoaded: false,
      busStopFrom: '',
      busStopTo: '',
      ticketFrom: '',
      ticketTo: '',
      atLeastOneTicketChosen: false
    }
  },
  watch: {
    $route (data, oldData) {
      this.getConnections()
    },
    ticketTo: function () {
      this.atLeastOneTicketChosen = this.ticketTo !== ''
    }
  },
  methods: {
    getConnections () {
      if (this.from && this.to && this.nrOfPassengers) {
        let queryString = `?from=${this.from}&to=${this.to}&departureDate=${this.startTime}&seats=${this.nrOfPassengers}`
        if (this.endTime != null) {
          queryString += `&returnDate=${this.endTime}`
        }
        axios.get(api.SEARCH_BUS_RIDES + queryString)
          .then((response) => {
            this.searchResults = response.data
            this.busStopFrom = this.searchResults.stopFrom
            this.busStopTo = this.searchResults.stopTo
            this.searchResultsLoaded = true
          })
      } else {
        this.redirected = false
      }
    },
    formatDate (time) {
      return moment(time, 'YYYY-MM-DD').format('D MMM YYYY')
    },
    formatTime (time) {
      return moment(time, moment.ISO_8601).format('HH:mm')
    }
  },
  mounted () {
    this.$nextTick(
      this.getConnections()
    )
  }

}
</script>
<style scoped>
  .no-results {
    font-size: 20px;
    color: darkgrey;
  }
</style>
