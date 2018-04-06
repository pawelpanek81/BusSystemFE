import state from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default {
  // state,
  // mutations,
  // getters,
  // actions
  state: Object.assign({}, state),
  mutations: Object.assign({}, mutations),
  getters: Object.assign({}, getters),
  actions: Object.assign({}, actions)
}
