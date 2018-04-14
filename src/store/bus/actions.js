import axios from 'axios'
import API from '../../api/endpoints'

export default {
  registerBus ({commit}, bus) {
    const registerBus = axios.post(API.BUSES, bus)
      .then((response) => {})
      .catch(function () {})
    return registerBus
  },
  deleteBus ({commit}, id) {
    const deletedBus = axios.delete(API.BUSES + '/' + id)
      .then((response) => {})
      .catch(function () {})
    return deletedBus
  }
}
