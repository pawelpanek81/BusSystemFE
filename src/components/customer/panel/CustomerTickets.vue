<template>
  <div>
    <vue-tabs>
     <v-tab title="Bilety oczekujące na płatność" class="p-3">
        <div  v-if="ticketsUnpaid.length !== 0">
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
            </thead>
            <tbody v-for="ticket in ticketsUnpaid" v-bind:key="ticket.orderId">
            <tr class="order">
              <td colspan="6">
                <div  class="row d-flex justify-content-around align-items-center">
                  <p class="m-0">Zamówienie nr {{ticket.orderId}}</p>
                  <button class="btn btn-outline-success" @click="payForTicket(ticket.url)">Opłać bilet</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {{ticket.firstTicket.id}}
              </td>
              <td class="text-uppercase">
                {{ticket.firstTicket.busRide.busLine.from.city}} <br> {{ticket.firstTicket.busRide.busLine.to.city}}
              </td>
              <td>
                {{formatIsoTime(ticket.firstTicket.busRide.startDateTime)}}
              </td>
              <td>
                {{formatIsoTime(ticket.firstTicket.busRide.endDateTime)}}
              </td>
              <td>
                {{ticket.firstTicket.price}}zł
              </td>
            </tr>
            <tr v-if="ticket.secondTicket !== null">
              <td>
                {{ticket.secondTicket.id}}
              </td>
              <td class="text-uppercase">
                {{ticket.secondTicket.busRide.busLine.from.city}} <br> {{ticket.secondTicket.busRide.busLine.to.city}}
              </td>
              <td>
                {{formatIsoTime(ticket.secondTicket.busRide.startDateTime)}}
              </td>
              <td>
                {{formatIsoTime(ticket.secondTicket.busRide.endDateTime)}}
              </td>
              <td>
                {{ticket.secondTicket.price}}zł
              </td>
              <td class="d-flex justify-content-center">
                <br><button class="btn btn-outline-success">Opłać bilet</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="p-5" v-else-if="ticketsLoaded">
          Brak zamówień oczekujących na płatność
        </div>
      </v-tab>
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
          <th>
            pdf
          </th>
          </thead>
          <tbody v-if="ticketsPaid.length !== 0">
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
              <a :href="baseUrl + ticket.id">
              <button type="button" id="downalodTicketPdf" class="btn btn-sm btn-outline-success">
                Pobierz
              </button>
            </a>
            </td>
          </tr>
          </tbody>
          <tr v-else-if="ticketsLoaded">
            <td colspan="4" class="p-5">Brak opłaconych biletów </td>
          </tr>
        </table>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import API from '../../../api/endpoints'
import CFG from '../../../api/config'
import moment from 'moment'

export default {
  data () {
    return {
      tickets: [],
      ticketsLoaded: false,
      ticketsPaid: [],
      ticketsUnpaid: [],
      baseUrl: CFG.API_BASE_URL + API.TICKETS + '/pdf/'
    }
  },
  methods: {
    getUserTickets () {
      axios.get(API.USER_TICKETS)
        .then((res) => {
          let tickets = res.data
          this.ticketsPaid = tickets
        })
        .then(() => {
          return axios.get(API.ORDERS)
        })
        .then((res) => {
          this.ticketsUnpaid = res.data
          this.ticketsLoaded = true
        })
    },
    formatIsoTime (time) {
      let readableDate = moment(time, moment.ISO_8601).format('DD-MM-YYYY')
      let readableTime = moment(time, moment.ISO_8601).format('HH:mm')
      return readableDate + ' ' + readableTime
    },
    payForTicket (payuLink) {
      window.open(payuLink, '_blank')
      this.getUserTickets()
    }
  },
  mounted () {
    this.getUserTickets()
  }
}
</script>
<style scoped>
  .order {
    background-color: #f3f3f3;
  }
</style>
