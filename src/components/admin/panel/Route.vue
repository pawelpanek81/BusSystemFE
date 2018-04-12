<template>
  <div v-if="busLineLoaded">
    <div class="row">
      <div class="col-8">
        <h5>Linia nr P3 {{busLine.from.city}} <i class="fas fa-long-arrow-alt-right"></i> {{busLine.to.city}} </h5>
      </div>
      <div class="col-4">
        <router-link to="/admin/buslines">
          <button type="button" class="btn btn-outline-success">
            Pokaż wszystkie linie
          </button>
        </router-link>
      </div>
    </div>
    <div v-if="busStopsLoaded" class="row container" v-for="busStop in busStops" v-bind:key="busStop.id">
      <div class="busStop mr-2"/>
      <div class="align-self-center">
        {{busStop.busStop.city}} {{busStop.busStop.address}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../../api/endpoints'

export default {
  data () {
    return {
      lineId: null,
      busStops: [
        {
          id: 0,
          address: 'Sucha 34',
          city: 'Wrocław',
          name: 'Dworzec Autobusowy, Wroclavia'
        },
        {
          id: 1,
          address: 'Olszewskiego 14',
          city: 'Kraków',
          name: 'Dworzec Główny 02'
        },
        {
          id: 2,
          address: 'Piłsudskiego 10',
          city: 'Rzeszów',
          name: 'Piłsudskiego 02'
        },
        {
          id: 3,
          address: 'Kowala 10',
          city: 'Lublin',
          name: 'Zoo Lublin'
        }
      ],
      busStops2: [],
      busLine: {},
      busLineLoaded: false,
      busStopsLoaded: false
    }
  },
  methods: {
    getBusLine (id) {
      axios.get(`${api.BUS_LINES}/${id}`)
        .then((response) => {
          this.busLine = response.data
          this.busLineLoaded = true
        })
    },
    getBusStops (id) {
      axios.get(`${api.BUS_LINES}/${id}/routes`)
        .then((response) => {
          this.busStops = response.data
          this.busStopsLoaded = true
        })
    }
  },
  created () {
    this.lineId = this.$route.params.id
  },
  mounted () {
    this.getBusLine(this.lineId)
    this.getBusStops(this.lineId)
  }
}
</script>
<style>
  .busStop {
    background-image: url('../../../../static/images/busStopIcon.png');
    background-size: contain;
    height: 50px;
    width: 25px;
  }
</style>
