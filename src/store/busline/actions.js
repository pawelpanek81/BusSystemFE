import api from '../../api/endpoints'
import MUTATION_TYPES from './mutation-types'
import axios from 'axios'

export default {
  addBusLine ({dispatch, commit}, lineData) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
    const addLine = axios.post(`${api.BUS_LINES}`, lineData)
      .then(function (response) {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
      .catch(function () {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
    return addLine
  },
  deleteBusLine ({dispatch, commit}, lineID) {
    commit(MUTATION_TYPES.SET_LOADING_SPINNER)
    const delLine = axios.delete(`${api.BUS_LINES}/${lineID}`)
      .then(function (response) {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
      .catch(function () {
        commit(MUTATION_TYPES.UNSET_LOADING_SPINNER)
      })
    return delLine
  }
}
