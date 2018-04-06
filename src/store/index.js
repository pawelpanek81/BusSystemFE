import Vuex from 'vuex'
import Vue from 'vue'
import userModule from './user/userModule'
import extraModule from './extra/extraModule'
import newsModule from './news/newsModule'
import busModule from './bus/busModule'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule,
    newsModule,
    busModule,
    extraModule
  }
})
