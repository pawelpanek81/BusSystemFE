import AdminPanel from '@/pages/users/admin/AdminPanel'
import Bus from '@/components/admin/panel/Bus'
import BusLine from '@/components/admin/panel/BusLine'
import BusStop from '@/components/admin/panel/BusStop'
import Driver from '@/components/admin/panel/Driver'
import Route from '@/components/admin/panel/Route'
import Timetable from '@/components/admin/panel/Timetable'
import AllBusLines from '@/components/admin/panel/AllBusLines'
import Schedule from '@/components/admin/panel/LineSchedule'
import ActiveTimetables from '@/components/admin/panel/ActiveTimetables'
import NonActiveTimetables from '@/components/admin/panel/NonActiveTimetables'

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
          },
          {
            path: ':id/schedule',
            component: Schedule
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
        component: Timetable,
        children: [
          {
            path: '',
            component: ActiveTimetables
          },
          {
            path: 'nonactivetimetables',
            component: NonActiveTimetables
          }
        ]
      }
    ]
  }
}
