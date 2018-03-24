<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 px-2">
        <transition name="fade">
          <div  v-if="newsLoaded">
          <news-component v-for="item in news" v-bind:key="item.id"
            :title="item.title" :newsBody="item.body" :newsDateTime="item.dateTime"></news-component>
          </div>
        </transition>
        <pagination-component></pagination-component>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 px-2">
        <info></info>
      </div>
    </div>
  </div>
</template>

<script>
import NewsComponent from './News'
import Info from './Info'
import {mapGetters} from 'vuex'
import PaginationComponent from './PaginationPane'

export default {
  data () {
    return {
    }
  },
  components: {
    newsComponent: NewsComponent,
    info: Info,
    paginationComponent: PaginationComponent
  },
  computed: {
    ...mapGetters(['news', 'newsLoaded']),
    actualPage: function () {
      if (this.$route.params.id) {
        return parseInt(this.$route.params.id)
      } else {
        return 1
      }
    }
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
</style>
