import MUTATION_TYPES from './mutation-types'

export default {
  [MUTATION_TYPES.LOGIN] (state) {
    state.logged = 1
  },
  [MUTATION_TYPES.LOGOUT] (state) {
    state.logged = 0
  }
}
