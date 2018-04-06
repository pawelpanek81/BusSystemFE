import Home from '@/pages/home/Home'
import Buyticket from '@/pages/navbar/Buyticket'
import Busstops from '@/pages/navbar/BusStops'
import Timetables from '@/pages/navbar/Timetables'
import Registration from '@/pages/navbar/Registration'
import Login from '@/pages/navbar/Login'
import Tickets from '@/pages/navbar/Tickets'

export default {
  HOME: {
    path: '/',
    name: 'Home',
    component: Home
  },
  BUYTICKET: {
    path: '/buy-ticket',
    name: 'Buyticket',
    component: Buyticket
  },
  BUSSTOPS: {
    path: '/bus-stops',
    name: 'Busstop',
    component: Busstops
  },
  TIMETABLES: {
    path: '/time-tables',
    name: 'Timetables',
    component: Timetables
  },
  REGISTER: {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  LOGIN: {
    path: '/login',
    name: 'Login',
    component: Login
  },
  TICKETS: {
    path: '/user/tickets',
    name: 'Tickets',
    component: Tickets
  }
}
