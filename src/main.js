// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

axios.interceptors.request.use((config) => {
  var authToken = localStorage.getItem('token')
  if (authToken) {
    config.headers['Authorization'] = authToken
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
