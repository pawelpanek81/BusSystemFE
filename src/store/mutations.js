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
  },
  [MUTATION_TYPES.SETREGISTERED] (state) {
    state.registeredFlag = true
  },
  [MUTATION_TYPES.UNSETREGISTERED] (state) {
    state.registeredFlag = false
  }
}
