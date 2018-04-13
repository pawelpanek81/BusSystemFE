import Vue from 'vue'
import Router from 'vue-router'
import AdminPanel from './users/admin/admin-panel'
import CustomerPanel from './users/customer/customer-panel'
import DriverPanel from './users/driver/driver-panel'
import BOKPanel from './users/bok/bok-panel'
import Navbar from './navbar/navbar'
import Pagination from './home/pagination'
import Map from './map'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    Navbar.HOME,
    Navbar.BUYTICKET,
    Navbar.BUSSTOPS,
    Navbar.BUSLINES,
    Navbar.TIMETABLES,
    Navbar.LOGIN,
    Navbar.REGISTER,
    Navbar.TICKETS,
    AdminPanel.ADMINPANEL,
    CustomerPanel.CUSTOMERPANEL,
    CustomerPanel.ACCOUNT_INFO,
    DriverPanel.DRIVERPANEL,
    BOKPanel.BOKPANEL,
    Pagination.GO,
    Map.MAP
  ]
})
