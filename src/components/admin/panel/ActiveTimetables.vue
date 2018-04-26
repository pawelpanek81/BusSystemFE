<template>
  <div>
      hello active timetab;es
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../../api/endpoints'

export default {
  data () {
    return {
      timetables: [],
      timetablesLoaded: false
    }
  },
  methods: {
    getAllActiveTimetables () {
      axios.get(api.BUS_RIDES)
        .then((response) => {
          this.timetablesLoaded = true
          this.timetables = response.data
        })
        .catch(() => {})
    }
  },
  mounted () {
    this.getAllActiveTimetables()
  }
}
</script>
