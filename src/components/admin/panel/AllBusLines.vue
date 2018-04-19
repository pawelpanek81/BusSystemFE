<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h5>Linie autobusowe</h5>
      </div>
      <div class="col-4 mb-3">
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
          <th scope="col">Trasa lini</th>
          <th scope="col">Rozkład lini</th>
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
            <router-link :to="{path: `/admin/buslines/${busLine.id}/route`, params: {lineId: busLine.id}}">
              <button class="btn btn-outline-success">
                Trasa
              </button>
            </router-link>
          </td>
          <td>
            <router-link :to="{path: `/admin/buslines/${busLine.id}/schedule`, params: {lineId: busLine.id}}">
              <button class="btn btn-outline-success">
                Rozkład
              </button>
            </router-link>
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
