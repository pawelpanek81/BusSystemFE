import Vue from 'vue'
import Router from 'vue-router'
import Navbar from './navbar'
import AdminPane from './admin-pane'
import UserPane from './user-pane'

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
    AdminPane.ACCOUNT_INFO,
    UserPane.ACCOUNT_INFO
  ]
})
