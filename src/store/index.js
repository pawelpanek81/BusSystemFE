import Vuex from 'vuex'
import Vue from 'vue'

// import state from './state/state'
// import mutations from './mutations/mutations'
// import getters from './getters/getters'
// import actions from './actions/actions'
import module from './module'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    module
  }
})
