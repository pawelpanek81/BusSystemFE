<template>
  <div class="container px-0">
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title"> {{this.title}} </h5>
        <p class="card-text card-height"> {{this.newsBody}}</p>
        <p class="card-text"><small class="text-muted"> {{formatIsoTime(this.newsDateTime)}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['title', 'newsBody', 'newsDateTime'],
  methods: {
    formatIsoTime (time) {
      let readableDate = moment(time, moment.ISO_8601).format('DD MMM YYYY')
      let readableTime = moment(time, moment.ISO_8601).format('HH:mm')
      return readableDate + ' ' + readableTime
    }
  }
}
</script>

<style>
  .card-height {
    min-height: 100px;
  }
</style>
