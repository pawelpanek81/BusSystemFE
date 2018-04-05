import Vue from 'vue'
import Router from 'vue-router'
import AdminPanel from './admin/admin-panel'
import CustomerPanel from './customer/customer-panel'
import DriverPanel from './driver/driver-panel'
import BOKPanel from './bok/bok-panel'
import Navbar from './navbar'
import Pagination from './pagination'
import Map from './map'
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
    AdminPanel.ADMINPANEL,
    CustomerPanel.CUSTOMERPANEL,
    DriverPanel.DRIVERPANEL,
    BOKPanel.BOKPANEL,
    Pagination.GO,
    Map.MAP
  ]
})
