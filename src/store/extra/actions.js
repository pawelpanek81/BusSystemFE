import MUTATION_TYPES from './mutation-types'

export default {
  setMessage ({commit}, message) {
    commit(MUTATION_TYPES.SHOW_MESSAGE, message)
  },
  clearMessage ({commit}) {
    commit(MUTATION_TYPES.CLEAR_MESSAGE)
  },
  setLoadingSpinner ({commit}) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
  },
  unsetLoadingSpinner ({commit}) {
    commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
  }
}
