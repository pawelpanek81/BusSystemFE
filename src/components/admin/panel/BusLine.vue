<template>
  <div>
    <div class="container">
      <div class="row pt-1">
        <div class="col-5">
          <label for="lineName">Nazwa lini autobusowej</label>
        </div>
        <div class="col">
          <label for="lineDriveTime">Całkowity czas przejazdu</label>
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <input type="text" class="form-control form-control-sm"
                 v-model="line.name" placeholder="nazwa linii"
                 id="lineName" name="lineName"
                 v-validate="'required'">
        </div>
        <div class="col-5">
          <input type="number" class="form-control form-control-sm"
                 id="lineDriveTime" name="lineDriveTime"
                 v-model="line.driveTime"
                 placeholder="czas przejazdu w minutach" min="1"
                 v-validate="'required|min_value:1'"
                 :class="{'is-invalid': errors.has('lineDriveTime')}"
                 data-vv-as="całkowity czas przejazdu w minutach">
          <span v-show="errors.has('lineDriveTime')"
                class="invalid-feedback">{{ errors.first('lineDriveTime') }}</span>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-5">
          <label for="lineFromStop">Przystanek początkowy</label>
        </div>
        <div class="col-5">
          <label for="lineToStop">Przystanek końcowy</label>
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <select class="form-control form-control-sm" v-model="line.busStopFromId"
                  id="lineFromStop" name="lineFromStop" v-validate="'required'">
            <option disabled value="">Wybierz przystanek początkowy</option>
            <option v-for="st in stops" v-bind:key="st.id" v-bind:value="st.id">
              {{st.city + ' - ' + st.name}}
            </option>
          </select>
        </div>
        <div class="col-5">
          <select class="form-control form-control-sm" v-model="line.busStopToId"
                  id="lineToStop" name="lineToStop" v-validate="'required'">
            <option disabled value="">Wybierz przystanek końcowy</option>
            <option v-for="st in stops" v-bind:key="st.id" v-bind:value="st.id">
              {{st.city + ' - ' + st.name}}
            </option>
          </select>
        </div>
      </div>

      <div class="row pt-4">
        <div class="col-3"></div>
        <div class="col-4">
          <button @click="validateForm" class="btn btn-success btn-block ">Dodaj linię</button>
        </div>
        <div class="col-4"></div>
      </div>
    </div>

    <div class="h4 pt-4">Wszystkie linie</div>
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">Nazwa</th>
        <th scope="col">Przystanek początkowy</th>
        <th scope="col">Przystanek końcowy</th>
        <th scope="col">Czas przejazdu</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="busline in lines" v-bind:key="busline.id">
        <td>{{busline.name}}</td>
        <td>{{busline.from.city}} - {{busline.from.name}}</td>
        <td>{{busline.to.city}} - {{busline.to.name}}</td>
        <td>{{busline.driveTime}} min</td>
        <td>
          <button class="btn btn-outline-warning" @click="ensureDeletingLine(busline)">Usuń</button>
        </td>
      </tr>
      </tbody>
    </table>
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
