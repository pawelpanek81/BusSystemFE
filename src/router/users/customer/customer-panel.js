import CustomerPanel from '@/pages/users/customer/CustomerPanel'
import AccountInfo from '@/pages/users/AccountInfo'
import CustomerTickets from '@/components/customer/panel/CustomerTickets'

export default {
  CUSTOMERPANEL: {
    path: '/customer',
    name: 'CustomerPanel',
    component: CustomerPanel,
    children: [
      {
        path: '',
        component: CustomerTickets
      },
      {
        path: 'info',
        component: AccountInfo
      }
    ]
  }
}
