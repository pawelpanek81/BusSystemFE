<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div  v-if="newsLoaded">
        <news-component v-for="item in news" v-bind:key="item.id"
          :title="item.title" :newsBody="item.body" :newsDateTime="item.dateTime"></news-component>
        </div>
      </div>
      <div class="col-4">col-4</div>
    </div>
  </div>
</template>

<script>
import NewsComponent from './News'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    newsComponent: NewsComponent
  },
  computed: {
    ...mapGetters(['news', 'newsLoaded'])
  },
  created () {
    var settings = {
      pageNr: 0,
      sizeOfNews: 5
    }
    this.$store.dispatch('getNews', settings)
  }
}
</script>
