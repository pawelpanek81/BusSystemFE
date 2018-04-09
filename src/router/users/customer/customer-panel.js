import CustomerPanel from '@/pages/users/customer/CustomerPanel'
import AccountInfo from '@/pages/users/customer/AccountInfo'

export default {
  CUSTOMERPANEL: {
    path: '/customer',
    name: 'CustomerPanel',
    component: CustomerPanel
  },
  ACCOUNT_INFO: {
    path: '/user/info',
    name: 'AccountInfo',
    component: AccountInfo
  }
}
