<template>
  <div>
    <div class="row">
      <router-link to="/admin/buslines">
        <p class="go-back">
          Pokaż wszystkie linie
        </p>
      </router-link>
    </div>
    <div class="row mt-4" v-if="busLineLoaded">
      <div class="mb-3">
        <h5>Kursy linii nr {{busLine.name}} {{busLine.from.city}} <i class="fas fa-long-arrow-alt-right"></i> {{busLine.to.city}} </h5>
      </div>
    </div>
    <div v-if="busLineSchedulesLoaded">
      <div class="row">
        <table class="table table-hover text-center" id="allbusLineSchedules">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kod (dni kursów)</th>
            <th scope="col">Aktywny?</th>
            <th scope="col">Cena przejazdu</th>
            <th scope="col">Godzina rozpoczęcia kursu</th>
            <th scope="col">Dodaj</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="schedule in busLineSchedules" v-bind:key="schedule.id">
            <th scope="row">{{schedule.id}}</th>
            <td>{{schedule.code}}</td>
            <td v-if="schedule.enabled">Tak</td>
            <td v-else>Nie</td>
            <td> 5 zł</td>
            <td>{{schedule.startHour}}</td>
            <td><input type="checkbox" v-bind:value="schedule.id" v-model="schedulesIds"/></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="row justify-content-around date-picker-width">
        <div class="my-2">
          <label for="startDate"><i class="fas fa-calendar-alt"></i> Wybierz termin</label>
          <div id="startDate">
            <el-date-picker
              :picker-options="pickerOptions"
              v-model="dateTime"
              type="datetimerange"
              range-separator="-" start-placeholder="Początek" end-placeholder="Koniec">
            </el-date-picker>
          </div>
        </div>
        <div class="my-2 d-flex align-items-end">
          <button type="button" class="btn btn-outline-success" id="buttonGenerate" @click="ensureGenerating">
            Generuj przejazdy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../../api/endpoints'
import swal from 'sweetalert'

export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (date) {
          return date.getTime() + 86400000 < Date.now()
        }
      },
      lineId: null,
      busLine: null,
      busLineLoaded: false,
      busLineSchedules: [],
      busLineSchedulesLoaded: false,
      dateTime: null,
      schedulesIds: []
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
    getLineSchedules (id) {
      axios.get(`${api.BUS_LINES}/${id}/schedules`)
        .then((response) => {
          this.busLineSchedules = response.data
          this.busLineSchedulesLoaded = true
        })
    },
    ensureGenerating () {
      let generateData = {
        busLine: this.lineId,
        startDateTime: this.toLocalISOTime(this.dateTime[0]),
        endDateTime: this.toLocalISOTime(this.dateTime[1]),
        schedulesIds: this.schedulesIds
      }
      swal({
        text: `Czy na pewno chcesz wygenerować te kursy?`,
        icon: 'warning',
        buttons: true
      })
        .then((willSave) => {
          if (willSave) {
            this.$store.dispatch('generateTimetables', generateData)
              .then(() => {
                swal('Wygenerowano wybrane przejazdy!', {
                  icon: 'success'
                })
                this.getLineSchedules(this.lineId)
              })
              .catch(() => {
                swal('Oops', 'Coś poszło nie tak...', 'error')
              })
          }
        })
    },
    toLocalISOTime (time) {
      var tzoffset = (new Date()).getTimezoneOffset() * 60000
      return (new Date(time - tzoffset)).toISOString().slice(0, -1)
    }
  },
  created () {
    this.lineId = this.$route.params.id
  },
  mounted () {
    this.getBusLine(this.lineId)
    this.getLineSchedules(this.lineId)
  }
}
</script>

<style scoped>
  .go-back {
    color: green;
    text-decoration: underline;
  }
  #buttonGenerate {
    height: 40px;
  }
</style>
