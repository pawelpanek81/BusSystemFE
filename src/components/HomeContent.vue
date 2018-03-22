<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <news-component v-for="item in newsy" v-bind:key="item.id"
          :title="item.title" :newsBody="'asd'" :newsDateTime="'ddd'"></news-component>
      </div>
      <div class="col-4">col-4</div>
    </div>
  </div>
</template>

<script>
import NewsComponent from './News'

export default {
  data () {
    return {
      newsy: [{
        id: 1,
        title: 'asd',
        newsBody: 'ddd',
        newsDateTime: '1231312'
      },
      {
        id: 2,
        title: 'asd2',
        newsBody: 'ddd2',
        newsDateTime: '12377'
      }]
    }
  },
  components: {
    newsComponent: NewsComponent
  }
}
</script>
