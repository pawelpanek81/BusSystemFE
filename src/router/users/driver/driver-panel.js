import DriverPanel from '@/pages/users/driver/DriverPanel'
import AccountInfo from '@/pages/users/AccountInfo'
import DriverRides from '@/components/driver/panel/DriverRides'

export default {
  DRIVERPANEL: {
    path: '/driver',
    name: 'Driver',
    component: DriverPanel,
    children: [
      {
        path: '',
        component: AccountInfo
      },
      {
        path: 'myrides',
        component: DriverRides
      }
    ]
  }
}
