import AdminPanel from '@/pages/users/admin/AdminPanel'
import Bus from '@/components/admin/panel/Bus'
import BusLine from '@/components/admin/panel/BusLine'
import BusStop from '@/components/admin/panel/BusStop'
import Driver from '@/components/admin/panel/Driver'
import Route from '@/components/admin/panel/Route'
import AllBusLines from '@/components/admin/panel/AllBusLines'
import Timetable from '@/components/admin/panel/Timetable'

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
        component: BusLine,
        children: [
          {
            path: '',
            component: AllBusLines
          },
          {
            path: ':id/route',
            component: Route
          }
        ]
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
      }
    ]
  }
}
