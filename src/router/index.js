import Vue from 'vue'
import Router from 'vue-router'
import Navbar from './navbar'

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
    Navbar.ADMINISTRATIONPANEL
  ]
})
