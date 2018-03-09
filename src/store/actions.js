import CFG from '../config'
import MUTATION_TYPES from './mutation-types'
import axios from 'axios'
import router from '../router'

export default {
  login ({commit}, credentail) {
    axios.post(`${CFG.API_BASE_URL}/login`, credentail)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.headers.authorization)
          commit(MUTATION_TYPES.LOGIN)
          router.push({path: '/'})
        } else if (response.status === 401) {
          console.log('bledne dane')
          return response
        }
      })
  },
  logout ({commit}) {
    localStorage.removeItem('token')
    commit(MUTATION_TYPES.LOGOUT)
    router.push({path: '/'})
  }

}
