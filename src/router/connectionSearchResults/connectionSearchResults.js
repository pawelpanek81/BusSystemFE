import ConnectionSearchResult from '@/pages/connectionSearchResult/ConnectionSearchResult'
import BuyTicketPanel from '@/components/home/BuyTicketPanel'

export default {
  CONNECTION_SEARCH_RESULT: {
    path: '/search',
    component: ConnectionSearchResult,
    name: 'Search',
    props: true
  },
  BUY_TICKET: {
    path: '/buyticket',
    component: BuyTicketPanel
  }
}
