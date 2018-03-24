import Home from '@/pages/Home'
import Buyticket from '@/pages/Buyticket'
import Busstops from '@/pages/BusStops'
import Timetables from '@/pages/Timetables'
import Registration from '@/pages/Registration'
import Login from '@/pages/Login'
import Tickets from '@/pages/Tickets'
import AdminPanel from '@/pages/AdminPanel'

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
  },
  ADMINISTRATIONPANEL: {
    path: '/admin/administrationpanel',
    name: 'Administration panel',
    component: AdminPanel
  }
}
