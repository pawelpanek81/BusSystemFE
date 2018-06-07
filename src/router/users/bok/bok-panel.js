import BOKPanel from '@/pages/users/bok/BOKPanel'
import AddNews from '@/pages/users/bok/AddNews'

export default {
  BOKPANEL: {
    path: '/bok',
    name: 'BOKPanel',
    component: BOKPanel,
    children: [
      {
        path: 'addnews',
        component: AddNews
      }
    ]
  }
}
