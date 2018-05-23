<template>
  <div>
    <vue-tabs>
      <v-tab title="Bilety opłacone" class="p-3">
        <table class="table text-center">
          <thead>
            <th>
              Nr biletu
            </th>
            <th>
              Relacja
            </th>
            <th>
              Wyjazd
            </th>
            <th>
              Przyjazd
            </th>
            <th>
              Kwota, data płatności
            </th>
          </thead>
          <tbody>
            <tr v-for="ticket in ticketsPaid" v-bind:key="ticket.id">
              <td>
                {{ticket.id}}
              </td>
              <td class="text-uppercase">
                {{ticket.busRide.busLine.from.city}} <br> {{ticket.busRide.busLine.to.city}}
              </td>
              <td>
                {{formatIsoTime(ticket.busRide.startDateTime)}}
              </td>
              <td>
                {{formatIsoTime(ticket.busRide.endDateTime)}}
              </td>
              <td>
                {{ticket.price}}zł <br> Bilet opłacony <br> {{formatIsoTime(ticket.dateTime)}}
              </td>
            </tr>
          </tbody>
        </table>
      </v-tab>

      <v-tab title="Bilety oczekujące na płatność" class="p-3">
        <table class="table text-center">
          <thead>
          <th>
            Nr biletu
          </th>
          <th>
            Relacja
          </th>
          <th>
            Wyjazd
          </th>
          <th>
            Przyjazd
          </th>
          <th>
            Kwota
          </th>
          <th></th>
          </thead>
          <tbody>
          <tr v-for="ticket in ticketsUnpaid" v-bind:key="ticket.id">
            <td>
              {{ticket.id}}
            </td>
            <td class="text-uppercase">
              {{ticket.busRide.busLine.from.city}} <br> {{ticket.busRide.busLine.to.city}}
            </td>
            <td>
              {{formatIsoTime(ticket.busRide.startDateTime)}}
            </td>
            <td>
              {{formatIsoTime(ticket.busRide.endDateTime)}}
            </td>
            <td>
              {{ticket.price}}zł
            </td>
            <td class="d-flex justify-content-center">
              <br><button class="btn btn-outline-success">Opłać bilet</button>
            </td>
          </tr>
          </tbody>
        </table>
      </v-tab>

    </vue-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import API from '../../../api/endpoints'
import moment from 'moment'

export default {
  data () {
    return {
      tickets: [],
      ticketsPaid: [],
      ticketsUnpaid: []
    }
  },
  methods: {
    getUserTickets () {
      axios.get(API.USER_TICKETS)
        .then((res) => {
          let tickets = res.data
          this.ticketsPaid = tickets
          this.ticketsUnpaid = tickets.filter(ticket => ticket.paid === false)
          console.log(tickets)
        })
    },
    formatIsoTime (time) {
      let readableDate = moment(time, moment.ISO_8601).format('DD-MM-YYYY')
      let readableTime = moment(time, moment.ISO_8601).format('HH:mm')
      return readableDate + ' ' + readableTime
    }
  },
  mounted () {
    this.getUserTickets()
  }
}
</script>
