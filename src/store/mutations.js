import MUTATION_TYPES from './mutation-types'

export default {
  [MUTATION_TYPES.LOGIN] (state) {
    state.logged = true
  },
  [MUTATION_TYPES.LOGOUT] (state) {
    state.logged = false
  },
  [MUTATION_TYPES.SHOWMESSAGE] (state, message) {
    state.message = message
  },
  [MUTATION_TYPES.CLEARMESSAGE] (state) {
    state.message = ''
  }
}
