import MUTATION_TYPES from './mutation-types'

export default {
  [MUTATION_TYPES.SET_LOADING_SPINNER] (state) {
    state.showLoader = true
  },
  [MUTATION_TYPES.UNSET_LOADING_SPINNER] (state) {
    state.showLoader = false
  },
  [MUTATION_TYPES.SET_TOKEN] (state, token) {
    state.token = token
  },
  [MUTATION_TYPES.SET_LOGGED] (state) {
    state.logged = true
  },
  [MUTATION_TYPES.UNSET_LOGGED] (state) {
    state.logged = false
  },
  [MUTATION_TYPES.SET_USERNAME] (state, username) {
    state.username = username
  },
  [MUTATION_TYPES.SET_USER_TYPE] (state, userType) {
    state.userType = userType
  },
  [MUTATION_TYPES.SHOW_MESSAGE] (state, message) {
    state.message = message
  },
  [MUTATION_TYPES.CLEAR_MESSAGE] (state) {
    state.message = null
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
  },
  [MUTATION_TYPES.LOAD_NEWS] (state, data) {
    state.news = data
  },
  [MUTATION_TYPES.SET_NEWS_LOADED] (state) {
    state.newsLoaded = true
  },
  [MUTATION_TYPES.UNSET_NEWS_LOADED] (state) {
    state.newsLoaded = false
  },
  [MUTATION_TYPES.SET_SIGNUP_SERVER_ERROR] (state) {
    state.signUpServerError = true
  },
  [MUTATION_TYPES.UNSET_SIGNUP_SERVER_ERROR] (state) {
    state.signUpServerError = false
  },
  [MUTATION_TYPES.SET_USER_TYPE] (state, userType) {
    state.userType = userType
  },
  [MUTATION_TYPES.TOTAL_NEWS_PAGES] (state, totalPages) {
    state.totalNewsPages = totalPages
  }
}
