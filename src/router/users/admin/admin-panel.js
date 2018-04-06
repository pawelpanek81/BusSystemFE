import AdminPanel from '@/pages/admin/AdminPanel'
import Bus from '@/components/admin/pane/Bus'
import BusLine from '@/components/admin/pane/BusLine'
import BusStop from '@/components/admin/pane/BusStop'
import Driver from '@/components/admin/pane/Driver'
import Route from '@/components/admin/pane/Route'
import Timetable from '@/components/admin/pane/Timetable'

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
