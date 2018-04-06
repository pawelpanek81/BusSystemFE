// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import VeeValidate from 'vee-validate'
import language from './language/vee-validate-messages-dictionary'

Vue.use(VeeValidate)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

VeeValidate.Validator.localize(language.dictionary)
VeeValidate.Validator.localize('pl')

axios.interceptors.request.use((config) => {
  let authToken = store.getters.getToken
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
