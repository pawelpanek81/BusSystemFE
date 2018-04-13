<template>
  <div>
    <div class="container" id="lines">
      <v-client-table :data="busLines" :columns="columns"></v-client-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {ClientTable, Event} from 'vue-tables-2'
import API from '../../api/endpoints'

export default {
  components: {
    ClientTable,
    Event
  },
  data () {
    return {
      columns: ['id', 'od', 'do', 'przez'],
      lines: [],
      busLines: []
    }
  },
  methods: {
    getLines () {
      axios.get(API.BUS_LINES)
        .then((response) => {
          this.lines = response.data
          this.prepareLines()
        })
        .catch(function () {})
    },
    getRoute (obj) {
      var routes = []
      axios.get(`${API.BUS_LINES}/${obj.id}/routes`)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            routes.push(response.data[i].busStop.city)
          }
          obj.przez = routes.join(', ')
        })
        .catch(function () {})
    },
    prepareLines () {
      this.busLines = []
      var line = null
      for (var i = 0; i < this.lines.length; i++) {
        line = this.lines[i]
        var a = {
          id: line.id,
          od: line.from.city,
          do: line.to.city,
          przez: null
        }
        this.getRoute(a)
        this.busLines.push(a)
        console.log('wyszedłem', this.busLines)
      }
    }
  },
  mounted () {
    this.getLines()
  }
}

</script>
