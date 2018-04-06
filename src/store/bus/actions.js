import axios from 'axios'
import CFG from '../../api/config'

export default {
  registerBus ({commit}, bus) {
    const registerBus = axios.post(`${CFG.API_BASE_URL}/buses`, bus)
      .then((response) => {})
      .catch(function () {})
    return registerBus
  },
  deleteBus ({commit}, id) {
    const deletedBus = axios.delete(`${CFG.API_BASE_URL}/buses/${id}`)
      .then((response) => {})
      .catch(function () {})
    return deletedBus
  }
}
