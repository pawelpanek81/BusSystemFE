<template>
  <div>
    <h3 class='mb-3'>Aktywne przejazdy</h3>
    <div v-if='timetablesLoaded'>
      <table class='table table-hover' id='rides'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nr linii</th>
            <th scope='col'>Wyjazd</th>
            <th scope='col'>Przyjazd</th>
            <th scope='col'>Kierowca</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='ride in timetables' v-bind:key='ride.id'>
            <th scope='row'>{{ride.id}}</th>
            <td>{{ride.busLine}}</td>
            <td>{{ride.startDateTime}}</td>
            <td>{{ride.endDateTime}}</td>
            <td>Jan Kowalski</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--<div v-for='tt in timetablesExample' v-bind:key='tt.id'>-->
      <!--<p>Przejazdy dla linii nr {{tt.lineName}} {{tt.lineDescription}}:</p>-->
      <!--<div>-->
        <!--<table class='table table-hover' id='ridess'>-->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th scope='col'>#</th>-->
            <!--<th scope='col'>Wyjazd</th>-->
            <!--<th scope='col'>Przyjazd</th>-->
            <!--<th scope='col'>Kierowca</th>-->
            <!--<th scope='col'>Aktywny od</th>-->
            <!--<th scope='col'>Aktywny do</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr v-for='ride in tt.rides' v-bind:key='ride.id'>-->
            <!--<th scope='row'>{{ride.id}}</th>-->
            <!--<td>{{ride.start}}</td>-->
            <!--<td>{{ride.end}}</td>-->
            <!--<td>{{ride.driver}}</td>-->
            <!--<td>{{ride.startDateTime}}</td>-->
            <!--<td>{{ride.endDateTime}}</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</table>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../../api/endpoints'

export default {
  data () {
    return {
      timetables: [],
      timetablesLoaded: false,
      timetablesExample: [
        {
          id: 1,
          lineName: 'L1',
          lineDescription: 'Tarnobrzeg ->  Rzeszów',
          rides: [
            {
              id: 1,
              start: '9.00',
              end: '13.00',
              startDateTime: '21.05.2018',
              endDateTime: '28.05.2018',
              driver: 'Jan Kowalski'
            },
            {
              id: 2,
              start: '10.00',
              end: '14.00',
              startDateTime: '21.05.2018',
              endDateTime: '28.05.2018',
              driver: 'Michał Nowak'
            },
            {
              id: 3,
              start: '17.00',
              end: '21.00',
              startDateTime: '21.05.2018',
              endDateTime: '28.05.2018',
              driver: 'Michał Malinowski'
            }
          ]
        },
        {
          id: 2,
          lineName: 'L2',
          lineDescription: 'Rzeszów ->  Tarnobrzeg',
          rides: [
            {
              id: 1,
              start: '14.00',
              end: '18.00',
              startDateTime: '21.05.2018',
              endDateTime: '28.05.2018',
              driver: 'Jan Kowalski'
            },
            {
              id: 2,
              start: '15.00',
              end: '19.00',
              startDateTime: '21.05.2018',
              endDateTime: '28.05.2018',
              driver: 'Michał Nowak'
            },
            {
              id: 3,
              start: '20.00',
              end: '23.00',
              startDateTime: '21.05.2018',
              endDateTime: '28.05.2018',
              driver: 'Michał Malinowski'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getAllActiveTimetables () {
      axios.get(api.BUS_RIDES)
        .then((response) => {
          this.timetablesLoaded = true
          this.timetables = response.data
          this.$nextTick(() => {
            this.showTableOptions()
          })
          console.log(this.timetables)
        })
        .catch(() => {})
    },
    showTableOptions () {
      $('#rides').DataTable({
        language: {
          'decimal': '',
          'emptyTable': 'No data available in table',
          'info': 'Wyświetlono _START_ do _END_ z _TOTAL_ pozycji',
          'infoEmpty': 'Wyświetlno 0 z 0 pozycji',
          'infoFiltered': '(filtered from _MAX_ total entries)',
          'infoPostFix': '',
          'thousands': '',
          'lengthMenu': 'Pokaż _MENU_ pozycji',
          'loadingRecords': 'Ładowanie..',
          'processing': 'Przetwarzanie...',
          'search': 'Szukaj:',
          'zeroRecords': 'Brak pasujących wyników',
          'paginate': {
            'first': 'Pierwszy',
            'last': 'Ostatni',
            'next': 'Następny',
            'previous': 'Poprzedni'
          },
          'aria': {
            'sortAscending': ': activate to sort column ascending',
            'sortDescending': ': activate to sort column descending'
          }
        }
      })
    }
  },
  mounted () {
    this.getAllActiveTimetables()
  }
}
</script>
