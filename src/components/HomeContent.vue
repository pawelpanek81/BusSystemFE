<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div>
          <news-component news-title="Pierwszy news" news-body="Body newsa" news-date-time="Dzisiaj"></news-component>
        </div>
      </div>
      <div class="col-4">col-4</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

var NewsComponent = Vue.extend({
  template: '<div class="container">\n' +
  '    <div class="card mb-3">\n' +
  '      <img class="card-img-top" src="../../static/images/2.jpg" alt="Card image cap">\n' +
  '      <div class="card-body">\n' +
  '        <h5 class="card-title">{{newsTitle}}</h5>\n' +
  '        <p class="card-text"> {{newsBody}}</p>\n' +
  '        <p class="card-text"><small class="text-muted">{{newsDateTime}}</small></p>\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </div>\n',
  props: ['newsTitle', 'newsBody', 'newsDateTime']
})

Vue.component('news-component', NewsComponent)
export default {
  components: {
    newsComponent: NewsComponent
  }
}
</script>
