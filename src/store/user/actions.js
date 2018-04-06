import CFG from '../../api/config'
import jwtDecoder from 'jwt-decode'
import router from '../../router'
import axios from 'axios'
import MUTATION_TYPES from './mutation-types'

export default {
  login ({dispatch, commit}, credentail) {
    dispatch('setLoadingSpinner')
    axios.post(`${CFG.API_LOGIN_BASE_URL}/login`, credentail)
      .then(response => {
        const rawToken = response.headers.authorization
        localStorage.setItem('token', rawToken)
        commit(MUTATION_TYPES.SET_TOKEN, rawToken)
        commit(MUTATION_TYPES.SET_LOGGED)
        const authDecodedToken = jwtDecoder(rawToken)
        commit(MUTATION_TYPES.SET_USERNAME, authDecodedToken.sub)
        commit(MUTATION_TYPES.SET_USER_TYPE, authDecodedToken.ut)
        dispatch('unsetLoadingSpinner')
        dispatch('setMessage', 'Zostałeś zalogowany')
        router.push({path: '/'})
      })
      .catch(function () {
        dispatch('unsetLoadingSpinner')
        dispatch('setLoginError')
      })
  },
  logout ({dispatch, commit}) {
    localStorage.removeItem('token')
    commit(MUTATION_TYPES.UNSET_LOGGED)
    commit(MUTATION_TYPES.SET_TOKEN, null)
    commit(MUTATION_TYPES.SET_USERNAME, null)
    commit(MUTATION_TYPES.SET_USER_TYPE, null)
    dispatch('setMessage', 'Zostałeś wylogowany')
    router.push({path: '/'})
  },
  signUp ({dispatch, commit}, registrationData) {
    dispatch('setLoadingSpinner')
    axios.post(`${CFG.API_BASE_URL}/users/sign-up`, registrationData)
      .then(function (response) {
        commit(MUTATION_TYPES.SET_REGISTERED)
        dispatch('unsetLoadingSpinner')
      })
      .catch(function () {
        dispatch('setSignUpServerError')
        dispatch('unsetLoadingSpinner')
      })
  },
  unsetRegisteredFlag ({commit}) {
    commit(MUTATION_TYPES.UNSET_REGISTERED)
  },
  setSignUpServerError ({commit}) {
    commit(MUTATION_TYPES.SET_SIGNUP_SERVER_ERROR)
  },
  unsetSignUpServerError ({commit}) {
    commit(MUTATION_TYPES.UNSET_SIGNUP_SERVER_ERROR)
  },
  setLoginError ({commit}) {
    commit(MUTATION_TYPES.SET_LOGIN_ERROR)
  },
  unsetLoginError ({commit}) {
    commit(MUTATION_TYPES.UNSET_LOGIN_ERROR)
  }
}
