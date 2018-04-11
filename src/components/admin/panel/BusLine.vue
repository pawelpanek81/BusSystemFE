<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h5>Linie autobusowe</h5>
      </div>
      <div class="col-4">
        <button type="button"  class="btn btn-outline-success">
          Dodaj nową linię
        </button>
      </div>
    </div>
    <div class="row">
      <table v-if="busLinesLoaded" class="table table-hover" id="allbusLines">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nazwa</th>
          <th scope="col">Z</th>
          <th scope="col">Do</th>
          <th scope="col">Czas przejazdu</th>
          <th scope="col">Więcej</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="busLine in busLines" v-bind:key="busLine.id">
          <th scope="row">{{busLine.id}}</th>
          <td>{{busLine.name}}</td>
          <td>{{busLine.from.city}}</td>
          <td>{{busLine.to.city}}</td>
          <td>{{busLine.driveTime}}</td>
          <td>
            <button class="btn btn-outline-success">
              Więcej
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import api from '../../../api/endpoints'

export default {
  data () {
    return {
      busLinesLoaded: false,
      busLines: []
    }
  },
  methods: {
    getBusLines () {
      axios.get(api.BUS_LINES)
        .then((response) => {
          this.busLinesLoaded = true
          this.busLines = response.data
        })
        .catch(function () {})
    }
  },
  mounted () {
    this.getBusLines()
  }
}
</script>
