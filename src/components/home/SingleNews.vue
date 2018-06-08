<template>
  <div class="container px-0">
    <div class="card mb-3">
      <div class="card-body">
        <div class="card-title clearfix">
          <h5 class="float-left p-0"> {{this.title}} </h5>
          <button v-show="getUserType === 'BOK'" @click="confirmDeleting(newsId)" class="btn btn-outline-danger float-right">Usuń wiadomość</button>
        </div>
        <p class="card-text card-height"> {{this.newsBody}}</p>
        <p class="card-text"><small class="text-muted"> {{formatIsoTime(this.newsDateTime)}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {mapGetters} from 'vuex'
import swal from 'sweetalert'
import axios from 'axios'
import api from '../../api/endpoints'

export default {
  props: ['title', 'newsBody', 'newsDateTime', 'newsId'],
  computed: {
    ...mapGetters(['getUserType'])
  },
  methods: {
    formatIsoTime (time) {
      let readableDate = moment(time, moment.ISO_8601).format('DD MMM YYYY')
      let readableTime = moment(time, moment.ISO_8601).format('HH:mm')
      return readableDate + ' ' + readableTime
    },
    confirmDeleting (id) {
      swal({
        text: `Czy na pewno chcesz usunąć tę wiadomość?`,
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.deleteNews(id)
          }
        })
    },
    deleteNews (id) {
      axios.delete(api.NEWS + `/${id}`)
        .then(() => {
          swal('Usunięto', {
            icon: 'success'
          })
          this.$emit('news-deleted')
        })
        .catch(() => {
          swal('Oops', 'Coś poszło nie tak...', 'error')
        })
    }
  }
}
</script>

<style>
  .card-height {
    min-height: 100px;
  }
</style>
