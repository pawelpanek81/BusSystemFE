import Vuex from 'vuex'
import Vue from 'vue'
import user from './user/index'
import addOns from './addons/index'
import news from './news/index'
import bus from './bus/index'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    news,
    bus,
    addOns
  }
})
