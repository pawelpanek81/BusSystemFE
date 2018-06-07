import BOKPanel from '@/pages/users/bok/BOKPanel'
import AddNews from '@/pages/users/bok/AddNews'
import BusRides from '@/components/admin/panel/BusRides'
import GenerateRidesList from '@/components/admin/panel/GenerateRidesList'
import Ride from '@/components/admin/panel/Ride'

export default {
  BOKPANEL: {
    path: '/bok',
    name: 'BOKPanel',
    component: BOKPanel,
    children: [
      {
        path: 'addnews',
        component: AddNews
      },
      {
        path: 'busrides',
        component: BusRides,
        children: [
          {
            path: '',
            component: BusRides
          },
          {
            path: ':id',
            name: 'BokRide',
            component: Ride,
            props: true
          }
        ]
      },
      {
        path: 'generate-rides',
        component: GenerateRidesList
      }

    ]
  }
}
