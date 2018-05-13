<template>
  <div class="container my-3 px-2">
    <div class="card" v-if="busStopsLoaded">
      <div class="row d-flex align-items-end justify-content-around mx-1 mt-3">
        <div class="my-2">
          <label for="from"><i class="fas fa-map-marker-alt"></i> Z</label>
          <div id="from">
            <select class="custom-select select-width" v-model.number="busFrom">
              <option v-for="busStop in busStops" v-bind:key="busStop.id"
                      v-bind:value="busStop.id">
                {{busStop.city}}, {{busStop.name}}
              </option>
            </select>
          </div>
        </div>
        <div class="my-2">
          <label for="to"><i class="fas fa-map-marker-alt"></i> Do</label>
          <div id="to">
            <select class="custom-select select-width" v-model.number="busTo">
              <option v-for="busStop in busStops" v-bind:key="busStop.id"
                      v-if="busStop.id != busFrom" v-bind:value="busStop.id">
                {{busStop.city}}, {{busStop.name}}
              </option>
            </select>
          </div>
        </div>
        <div class="my-2">
          <label for="startDate"><i class="fas fa-calendar-alt"></i> Odjazd</label>
          <div id="startDate">
            <el-date-picker
              :picker-options="pickerOptionsStart"
              v-model="startTime"
              type="datetime"
              placeholder="Odjazd">
            </el-date-picker>
          </div>
        </div>
        <div class="my-2">
          <label for="endDate"><i class="fas fa-calendar-alt"></i> Przyjazd</label>
          <div id="endDate">
            <el-date-picker
              :picker-options="pickerOptionsEnd"
              :disabled="this.startTime == null"
              v-model="endTime"
              type="datetime"
              placeholder="Przyjazd">
            </el-date-picker>
          </div>
        </div>
        <div class="my-2">
          <label for="passengers"><i class="fas fa-users"></i> Pasażerowie</label>
          <input type="number" id="passengers" min="0" class="form-control input-width"
                 v-model.number="nrOfPassengers"/>
        </div>
      </div>
      <div class="row d-flex align-items-end justify-content-around mx-1 mb-3 mt-1">
        <div>
          <button class="btn btn-success">Wyszukaj połączenie</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../api/endpoints'
export default {
  name: 'connections-searcher',
  data () {
    return {
      milisecondsInADay: 86400000,
      startTime: null,
      endTime: null,
      pickerOptionsStart: {
        disabledDate: (date) => {
          return date.getTime() + this.milisecondsInADay < Date.now()
        }
      },
      pickerOptionsEnd: {
        disabledDate: (date) => {
          return date.getTime() < this.startTime
        }
      },
      busStops: [],
      busStopsLoaded: false,
      busFrom: '',
      busTo: '',
      nrOfPassengers: 1
    }
  },
  watch: {
    busFrom: function () {
      console.log(this.busFrom)
    }
  },
  methods: {
    getBusStops () {
      axios.get(api.BUS_STOPS)
        .then((response) => {
          this.busStops = response.data
          this.busStopsLoaded = true
          this.busFrom = this.busStops[0].id
          this.busTo = this.busStops[1].id
        })
    }
  },
  mounted () {
    this.getBusStops()
  }
}
</script>

<style scoped>
  .select-width {
    width: 200px;
  }
  .container {
    font-size: small;
  }
  .input-width {
    width: 100px
  }
  .card >>> .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 200px;
  }
</style>
