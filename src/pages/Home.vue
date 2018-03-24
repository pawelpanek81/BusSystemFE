<template>
  <div>
    <div class="container">
      <div class="mt-4 mb-4">
        <carousel-pane></carousel-pane>
        <connections-searcher-pane class="p-0 my-3"></connections-searcher-pane>
        <home-content></home-content>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselPane from '@/components/CarouselPane'
import BuyTicket from '@/components/BuyTicketPane'
import HomeContent from '@/components/HomeContent'
import ConnectionsSearcherPane from '../components/ConnectionsSearcherPane'

export default {
  methods: {
    playCarousel: function () {
      $('.carousel').carousel({
        interval: 8000,
        cycle: true
      })
    }
  },
  mounted () {
    this.playCarousel()
  },
  components: {
    CarouselPane: CarouselPane,
    ConnectionsSearcherPane: ConnectionsSearcherPane,
    buyTicketComponent: BuyTicket,
    homeContent: HomeContent
  }
}

</script>
