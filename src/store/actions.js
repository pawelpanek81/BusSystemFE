import CFG from '../config'
import MUTATION_TYPES from './mutation-types'
import axios from 'axios'
import router from '../router'

export default {
  login ({dispatch, commit}, credentail) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
    axios.post(`${CFG.API_LOGIN_BASE_URL}/login`, credentail)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.headers.authorization)
          commit(MUTATION_TYPES.LOGIN)
          commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
          dispatch('setMessage', 'Zostałeś zalogowany')
          router.push({path: '/'})
        }
      })
      .catch(function () {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
        dispatch('setLoginError')
      })
  },
  logout ({dispatch, commit}) {
    localStorage.removeItem('token')
    commit(MUTATION_TYPES.LOGOUT)
    dispatch('setMessage', 'Zostałeś wylogowany')
    router.push({path: '/'})
  },
  signUp ({dispatch, commit}, registrationData) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
    axios.post(`${CFG.API_BASE_URL}/users/sign-up`, registrationData)
      .then(function (response) {
        if (response.status === 200) {
          commit(MUTATION_TYPES.SET_REGISTERED)
          commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
        }
      })
      .catch(function (error) {
        if (error.response && error.response.data.status === 3) {
          dispatch('setSignUpServerError')
        }
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
  },
  getNews ({dispatch, commit}, settings) {
    axios.get(`${CFG.API_BASE_URL}/getNews?page=${settings.pageNr}&size=${settings.sizeOfNews}&sort=dateTime,DESC`)
      .then(function (response) {
        if (response.status === 200) {
          commit(MUTATION_TYPES.LOAD_NEWS, response.data.content)
          commit(MUTATION_TYPES.SET_NEWS_LOADED)
        }
      })
      .catch(() => {})
  },
  unsetRegisteredFlag ({commit}) {
    commit(MUTATION_TYPES.UNSET_REGISTERED)
  },
  setMessage ({commit}, message) {
    commit(MUTATION_TYPES.SHOW_MESSAGE, message)
  },
  clearMessage ({commit}) {
    commit(MUTATION_TYPES.CLEAR_MESSAGE)
  },
  setLoginError ({commit}) {
    commit(MUTATION_TYPES.SET_LOGIN_ERROR)
  },
  unsetLoginError ({commit}) {
    commit(MUTATION_TYPES.UNSET_LOGIN_ERROR)
  },
  loadNews ({commit}, data) {
    commit(MUTATION_TYPES.LOAD_NEWS, data)
  },
  setNewsLoaded ({commit}) {
    commit(MUTATION_TYPES.SET_NEWS_LOADED)
  },
  unSetNewsLoaded ({commit}) {
    commit(MUTATION_TYPES.UNSET_NEWS_LOADED)
  },
  setSignUpServerError ({commit}) {
    commit(MUTATION_TYPES.SET_SIGNUP_SERVER_ERROR)
  },
  unsetSignUpServerError ({commit}) {
    commit(MUTATION_TYPES.UNSET_SIGNUP_SERVER_ERROR)
  }
}
