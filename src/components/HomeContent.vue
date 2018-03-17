<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <news-component></news-component>
        <news-component></news-component>
        <news-component></news-component>
      </div>
      <div class="col-4">col-4</div>
    </div>
  </div>
</template>

<script>
import NewsComponent from '@/components/News'

export default {
  components: {
    newsComponent: NewsComponent
  }
}
</script>
