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
import vMediaQuery from 'v-media-query'
import config from './api/config'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/pl'
import 'element-ui/lib/theme-chalk/index.css'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import moment from 'moment'
import 'moment/locale/pl'

moment.locale('pl')

Vue.use(VueTabs)
Vue.use(vMediaQuery)
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)
Vue.use(Element, { locale })

Vue.config.productionTip = false

VeeValidate.Validator.localize(language.dictionary)
VeeValidate.Validator.localize('pl')

axios.defaults.baseURL = config.API_BASE_URL

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
