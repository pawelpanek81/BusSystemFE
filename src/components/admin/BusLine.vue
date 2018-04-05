<template>
  <div>
    <label for="lineName">Nazwa lini autobusowej</label>
    <input v-model="line.name" placeholder="nazwa linii" id="lineName" name="lineName" v-validate>

    <br/>
    <label for="lineFromStop">Przystanek początkowy</label>
    <select v-model="line.from" id="lineFromStop" name="lineFromStop">
      <option disabled value="">Wybierz przystanek początkowy</option>
      <option v-for="st in stops" v-bind:key="st.id">{{st.city + ' - ' + st.name}}</option>
    </select>
    <span>{{line.from}}</span>

    <br/>
    <label for="lineToStop">Przystanek końcowy</label>
    <select v-model="line.to" id="lineToStop" name="lineToStop">
      <option disabled value="">Wybierz przystanek końcowy</option>
      <option v-for="st in stops" v-bind:key="st.id">{{st.city + ' - ' + st.name}}</option>
    </select>

    <br/>
    <label for="lineDriveTime">Całkowity czas przejazdu</label>
    <input type="text" v-model="line.drive_time" placeholder="czas przejazdu w minutach" id="lineDriveTime" name="lineDriveTime">
    <br/>
    <button @click="validateForm" class="btn btn-success btn">Dodaj linię</button>

    <br/>
    <br/>
    <h4>Wsztstkie linie</h4>
    <p v-for="lin in lines" v-bind:key="lin.id">
      Linia: {{line.name}} <br/>
      Przystanek początkowy: {{lie.from}} <br/>
      Przystanek końcowy: {{lin.to}} <br/>
      Czas przejazdu: {{lin.drive_time}} minut
    </p>
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
        name: '',
        from: null,
        to: null,
        drive_time: null
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
          console.log('error', error)
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
          console.log('error', error)
        })
    },
    validateForm () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.addLine(this.line)
          }
        })
    },
    addLine (lineData) {
      console.log(lineData)
      this.$store.dispatch('addBusLine', lineData)
    }
  },
  mounted () {
    this.getStops()
    this.getLines()
    console.log('mounted')
  }
}

</script>
