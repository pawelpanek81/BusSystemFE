import axios from 'axios'
import api from '../../api/endpoints'

export default {
  registerBus ({commit}, bus) {
    const registerBus = axios.post(api.BUSES, bus)
      .then((response) => {})
      .catch(function () {})
    return registerBus
  },
  deleteBus ({commit}, id) {
    const deletedBus = axios.delete(api.BUSES + '/' + id)
      .then((response) => {})
      .catch(function () {})
    return deletedBus
  }
}
