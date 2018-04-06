import CFG from '../../api/config'
import MUTATION_TYPES from './mutation-types'
import axios from 'axios'
import router from '../../router/index'

export default {
  getNews ({dispatch, commit}, settings) {
    axios.get(`${CFG.API_BASE_URL}/news?page=${settings.page}&size=${settings.size}&sort=dateTime,DESC`)
      .then(function (response) {
        commit(MUTATION_TYPES.LOAD_NEWS, response.data.content)
        commit(MUTATION_TYPES.TOTAL_NEWS_PAGES, response.data.totalPages)
        commit(MUTATION_TYPES.SET_NEWS_LOADED)
      })
  },
  addNews ({dispatch, commit}, newsData) {
    dispatch('setLoadingSpinner')
    axios.post(`${CFG.API_BASE_URL}/news`, newsData)
      .then(function (response) {
        dispatch('setMessage', 'News Dodany')
        dispatch('unsetLoadingSpinner')
        router.push({path: '/'})
      })
      .catch(function () {
        dispatch('unsetLoadingSpinner')
      })
  },
  loadNews ({commit}, data) {
    commit(MUTATION_TYPES.LOAD_NEWS, data)
  },
  setNewsLoaded ({commit}) {
    commit(MUTATION_TYPES.SET_NEWS_LOADED)
  },
  unSetNewsLoaded ({commit}) {
    commit(MUTATION_TYPES.UNSET_NEWS_LOADED)
  }
}
