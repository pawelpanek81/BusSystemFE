<template>
  <div>
    <connection-searcher-panel/>
    results
  </div>
</template>

<script>
import ConnectionSearcherPanel from '../../components/home/ConnectionsSearcherPanel'
import axios from 'axios'
import api from '../../api/endpoints'

export default {
  props: ['from', 'to', 'startTime', 'endTime', 'nrOfPassengers'],
  components: {
    ConnectionSearcherPanel
  },
  data () {
    return {
      searchResults: [],
      searchResultsLoaded: false
    }
  },
  methods: {
    getConnections () {
      let queryString = `?from=${this.from}&to=${this.to}&departureDate=${this.startTime}&seats=${this.nrOfPassengers}`
      if (this.endTime != null) {
        queryString += `&returnDate=${this.endTime}`
      }
      axios.get(api.SEARCH_BUS_RIDES + queryString)
        .then((response) => {
          this.searchResults = response.data
          this.searchResultsLoaded = true
          console.log(response.data)
        })
    }
  },
  mounted () {
    this.getConnections()
  }

}
</script>
