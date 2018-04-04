import AdminPanel from '@/pages/AdminPanel'
import Bus from '@/components/admin/Bus'
import BusLine from '@/components/admin/BusLine'
import BusStop from '@/components/admin/BusStop'
import Driver from '@/components/admin/Driver'
import Route from '@/components/admin/Route'
import Timetable from '@/components/admin/Timetable'

export default {
  ADMINPANEL: {
    path: '/admin',
    component: AdminPanel,
    children: [
      {
        path: 'buses',
        component: Bus
      },
      {
        path: 'buslines',
        component: BusLine
      },
      {
        path: 'busstops',
        component: BusStop
      },
      {
        path: 'drivers',
        component: Driver
      },
      {
        path: 'timetables',
        component: Timetable
      },
      {
        path: 'routes',
        component: Route
      }
    ]
  }
}
