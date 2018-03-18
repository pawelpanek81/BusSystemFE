import MUTATION_TYPES from './mutation-types'

export default {
  [MUTATION_TYPES.SET_LOADING_SPINNER] (state) {
    state.showLoader = true
  },
  [MUTATION_TYPES.UNSET_LOADING_SPINNER] (state) {
    state.showLoader = false
  },
  [MUTATION_TYPES.LOGIN] (state) {
    state.logged = true
  },
  [MUTATION_TYPES.LOGOUT] (state) {
    state.logged = false
  },
  [MUTATION_TYPES.SHOW_MESSAGE] (state, message) {
    state.message = message
  },
  [MUTATION_TYPES.CLEAR_MESSAGE] (state) {
    state.message = ''
  },
  [MUTATION_TYPES.SET_REGISTERED] (state) {
    state.registeredFlag = true
  },
  [MUTATION_TYPES.UNSET_REGISTERED] (state) {
    state.registeredFlag = false
  },
  [MUTATION_TYPES.SET_LOGIN_ERROR] (state) {
    state.loginError = true
  },
  [MUTATION_TYPES.UNSET_LOGIN_ERROR] (state) {
    state.loginError = false
  }
}
