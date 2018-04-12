<template>
  <div>
    <div class="container" id="stops">
      <v-client-table :data="busStops" :columns="columns"></v-client-table>
    </div>
  </div>
</template>

<script>
import {ClientTable, Event} from 'vue-tables-2'
import API from '../../api/endpoints'

export default {
  components: {
    ClientTable,
    Event
  },
  data () {
    return {
      columns: ['id', 'city', 'address', 'name'],
      busStops: []
    }
  },
  methods: {
    getBusStops () {
      this.$http.get(API.BUS_STOPS)
        .then(res => { this.busStops = res.data })
    }
  },
  mounted () {
    this.getBusStops()
  }
}

</script>
