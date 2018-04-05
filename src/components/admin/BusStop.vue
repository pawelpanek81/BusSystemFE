<template>
  <div>
    <h5>Dodaj nowy przystanek</h5>
    <div class="row mt-4">
      <div class="col-4">
        <label for="busStopName">Nazwa przystanku</label>
      </div>
      <div class="col-6">
        <input type="text" class="form-control form-control-sm" id="busStopName"
               name="busStopName"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busStopName')}"
               v-model="busStop.name"
               data-vv-as="nazwę przystanku">
        <span v-show="errors.has('busStopName')"
              class="invalid-feedback">{{ errors.first('busStopName') }}</span>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-4">
        <label for="busStopCity">Miasto</label>
      </div>
      <div class="col-6">
        <input type="text" class="form-control form-control-sm" id="busStopCity"
               name="busStopCity"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busStopCity')}"
               v-model="busStop.city"
               data-vv-as="miasto">
        <span v-show="errors.has('busStopCity')"
              class="invalid-feedback">{{ errors.first('busStopCity') }}</span>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-4">
        <label for="busStopLatitude">Szerokość geograficzna</label>
      </div>
      <div class="col-6">
        <input type="text" class="form-control form-control-sm" id="busStopLatitude"
               name="busStopLatitude"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busStopLatitude')}"
               v-model="busStop.latitude"
               data-vv-as="szerokość geograficzną">
        <span v-show="errors.has('busStopLatitude')"
              class="invalid-feedback">{{ errors.first('busStopLatitude') }}</span>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-4">
        <label for="busStopLongitude">Długość geograficzna</label>
      </div>
      <div class="col-6">
        <input type="text" class="form-control form-control-sm" id="busStopLongitude"
               name="busStopLongitude"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busStopLongitude')}"
               v-model="busStop.longitude"
               data-vv-as="długość geograficzną">
        <span v-show="errors.has('busStopLongitude')"
              class="invalid-feedback">{{ errors.first('busStopLongitude') }}</span>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-4">
        <label for="busStopAddress">Adres</label>
      </div>
      <div class="col-6">
        <input type="text" class="form-control form-control-sm" id="busStopAddress"
               name="busStopAddress"
               v-validate="'required'"
               :class="{'is-invalid': errors.has('busStopAddress')}"
               v-model="busStop.address"
               data-vv-as="adres">
        <span v-show="errors.has('busStopAddress')"
              class="invalid-feedback">{{ errors.first('busStopAddress') }}</span>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 text-center">
        <button type="button" id="registerBusButton" class="btn btn-outline-success"
                @click="validateAndSend">Dodaj
          przystanek
        </button>
      </div>
    </div>
    <v-dialog/>
    <h5 class="mt-2">Wszystkie przystanki</h5>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Miasto</th>
        <th scope="col">Nazwa przystanku</th>
        <th scope="col">Adres</th>
        <th scope="col">Szerokość geo.</th>
        <th scope="col">Długość geo.</th>
        <th scope="col">Usuń</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="busStop in busStops" v-bind:key="busStop.id">
        <th scope="row">{{busStop.id}}</th>
        <td>{{busStop.city}}</td>
        <td>{{busStop.name}}</td>
        <td>{{busStop.address}}</td>
        <td>{{busStop.latitude}}</td>
        <td>{{busStop.longitude}}</td>
        <td>
          <button class="btn btn-outline-danger"
                  @click="ensureDeletingBusStop(busStopToString(busStop), busStop.id)">
            Usuń
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CFG from '../../config'
import ENDPOINTS from '../../endpoints'
import swal from 'sweetalert'

export default {
  data () {
    return {
      busStop: {
        city: '',
        name: '',
        address: '',
        latitude: '',
        longitude: ''
      },
      busStops: []
    }
  },
  methods: {
    getBusStops () {
      this.$http.get(`${CFG.API_BASE_URL + ENDPOINTS.GET_BUS_STOPS}`)
        .then((res) => {
          this.busStops = res.data
        })
    },
    validateAndSend () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.addBusStop(this.busStop)
          }
        })
    },
    addBusStop (data) {
      this.$store.dispatch('addBusStop', data)
    },
    deleteBusStopById (id) {
      this.$store.dispatch('deleteBusStop', id)
    },
    busStopToString: (busStop) => {
      return busStop.city + ' ' + busStop.name + ' ' + busStop.address
    },
    ensureDeletingBusStop (busStop, id) {
      swal({
        title: 'Czy jesteś pewny?',
        text: 'Próbujesz usunąć przystanek: ' + busStop + '?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.deleteBusStopById(id)
            swal('Usunięto przystanek', {
              icon: 'success'
            })
          } else {
            swal('Przystanek został zachowany')
          }
        })
    }
  },
  mounted () {
    this.getBusStops()
  }
}
</script>
