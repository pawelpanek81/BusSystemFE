<template>
  <div>
    <div class="container">
      <div class="row pt-1">
        <div class="col-4">
          <label for="lineName">Nazwa lini autobusowej</label>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <input v-model="line.name" placeholder="nazwa linii" id="lineName" name="lineName" v-validate>
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
          <select v-model="line.busStopFromId" id="lineFromStop" name="lineFromStop">
            <option disabled value="">Wybierz przystanek początkowy</option>
            <option v-for="st in stops" v-bind:key="st.id" v-bind:value="st.id">{{st.city + ' - ' + st.name}}</option>
          </select>
        </div>
        <div class="col-5">
          <select v-model="line.busStopToId" id="lineToStop" name="lineToStop">
            <option disabled value="">Wybierz przystanek końcowy</option>
            <option v-for="st in stops" v-bind:key="st.id" v-bind:value="st.id">{{st.city + ' - ' + st.name}}</option>
          </select>
        </div>
      </div>

      <div class="row pt-4">
        <div class="col">
          <label for="lineDriveTime">Całkowity czas przejazdu</label></div>
      </div>
      <div class="row">
        <div class="col">
          <input type="text" v-model="line.driveTime" placeholder="czas przejazdu w minutach" id="lineDriveTime"
                 name="lineDriveTime">
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
          <button class="btn btn-outline-warning" @click="ensureDeletingLine(busline.name, busline.id)">Usuń
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import CFG from '../../config'

export default {
  name: 'lines',
  data () {
    return {
      stops: [],
      line: {
        busStopFromId: 0,
        busStopToId: 0,
        driveTime: 0,
        name: ''
      },
      lines: []
    }
  },
  methods: {
    getStops () {
      let self = this
      axios.get(`${CFG.API_BASE_URL}/bus-stops`)
        .then(function (response) {
          console.log('bus-stops', response.data)
          self.stops = response.data
        })
        .catch(function (error) {
          console.log('getStops error: ', error)
        })
    },
    getLines () {
      let self = this
      axios.get(`${CFG.API_BASE_URL}/bus-lines`)
        .then(function (response) {
          console.log('bus-lines', response.data)
          self.lines = response.data
        })
        .catch(function (error) {
          console.log('getLines error: ', error)
        })
    },
    validateForm () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.addLine(this.line)
            this.getLines()
          }
        })
    },
    addLine (lineData) {
      this.$store.dispatch('addBusLine', lineData)
    },
    deleteLine (id) {
      this.$store.dispatch('deleteBusLine', id)
    },
    ensureDeletingLine (name, id) {
      let vm = this
      this.$modal.show('dialog', {
        title: 'Usuń linię autobusową',
        text: `Czy na pewno chcesz usunąć linię ${name}?`,
        buttons: [
          {
            title: 'Usuń',
            handler: () => {
              vm.deleteLine(id)
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Wróć',
            default: true,
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
    }
  },

  mounted () {
    this.getStops()
    this.getLines()
    console.log('mounted')
  }
}

</script>
