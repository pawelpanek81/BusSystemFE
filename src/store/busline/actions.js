import CFG from '../../config'
import MUTATION_TYPES from '../mutation-types/mutation-types'
import axios from 'axios'

export default {
  addBusLine ({dispatch, commit}, lineData) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
    axios.post(`${CFG.API_BASE_URL}/bus-lines`, lineData)
      .then(function (response) {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
      .catch(function () {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
  },
  deleteBusLine ({dispatch, commit}, lineID) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
    axios.delete(`${CFG.API_BASE_URL}/bus-lines/${lineID}`)
      .then(function (response) {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
      .catch(function () {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
  }
}
