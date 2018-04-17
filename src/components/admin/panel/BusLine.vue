<template>
  <div>

    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import API from '../../../api/endpoints'
import swal from 'sweetalert'

export default {
  name: 'lines',
  data () {
    return {
      stops: [],
      line: {
        busStopFromId: 0,
        busStopToId: 0,
        driveTime: null,
        name: ''
      },
      lines: []
    }
  },
  methods: {
    getStops () {
      axios.get(API.BUS_STOPS)
        .then((response) => {
          this.stops = response.data
        })
        .catch(function () {})
    },
    getLines () {
      axios.get(API.BUS_LINES)
        .then((response) => {
          this.lines = response.data
        })
        .catch(function () {})
    },
    validateForm () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.addLine(this.line)
          }
        })
    },
    resetInputs () {
      this.line = {
        busStopFromId: 0,
        busStopToId: 0,
        driveTime: null,
        name: ''
      }
      this.$validator.reset()
    },
    addLine (lineData) {
      this.$store.dispatch('addBusLine', lineData)
        .then(() => this.getLines())
    },
    deleteLine (id) {
      this.$store.dispatch('deleteBusLine', id)
        .then(() => this.getLines())
    },
    ensureDeletingLine (busline) {
      swal({
        text: `Czy na pewno chcesz usunąć trasę ${busline.name} z bazy?`,
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.deleteLine(busline.id)
            swal('Usunięto', {
              icon: 'success'
            })
          }
        })
    }
  },

  mounted () {
    this.getStops()
    this.getLines()
  }
}

</script>
