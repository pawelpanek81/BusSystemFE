import Vue from 'vue'
import Router from 'vue-router'
import AdminPanel from './admin/admin-panel'
import Navbar from './navbar'
import Pagination from './pagination'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    Navbar.HOME,
    Navbar.BUYTICKET,
    Navbar.BUSSTOPS,
    Navbar.TIMETABLES,
    Navbar.LOGIN,
    Navbar.REGISTER,
    Navbar.TICKETS,
    Navbar.ADMINISTRATIONPANEL,
    AdminPanel.ADDNEWS,
    Pagination.GO
  ]
})
