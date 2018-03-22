<template>
  <div class="container">
    <div class="card mb-3">
      <img class="card-img-top" src="../../static/images/2.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"> {{this.title}} </h5>
        <p class="card-text"> {{this.newsBody}}</p>
        <p class="card-text"><small class="text-muted"> {{this.newsDateTime}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'newsBody', 'newsDateTime']
}
</script>
