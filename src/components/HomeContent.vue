<template>
  <div class="container">
    <div class="row">
      <div class="col-8 pl-0">
        <div  v-if="newsLoaded">
        <news-component v-for="item in news" v-bind:key="item.id"
          :title="item.title" :newsBody="item.body" :newsDateTime="item.dateTime"></news-component>
        </div>
      </div>
      <div class="col-4 mb-3 info-height">
        <info></info>
      </div>
    </div>
  </div>
</template>

<script>
import NewsComponent from './News'
import Info from './Info'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    newsComponent: NewsComponent,
    info: Info
  },
  computed: {
    ...mapGetters(['news', 'newsLoaded'])
  },
  created () {
    var settings = {
      pageNr: 0,
      sizeOfNews: 3
    }
    this.$store.dispatch('getNews', settings)
  }
}
</script>

<style scoped>
  .info-height {
    overflow: hidden;
    width: 100%;
  }
</style>
