<template>
  <panel :items="items" :panelName="panelName"></panel>
</template>

<script>
import panel from '@/components/UserPanel'

export default {
  components: {
    panel
  },
  data: function () {
    var items = [
      {name: 'Kierowcy', urlLink: '/admin/drivers', routeName: 'drivers'},
      {name: 'Przystanki', urlLink: '/admin/busstops', routeName: 'busstops'},
      {name: 'Linie autobusowe', urlLink: '/admin/buslines', routeName: 'buslines'},
      {name: 'Przejazdy', urlLink: '/admin/timetables', routeName: 'timetables'},
      {name: 'Pojazdy', urlLink: '/admin/buses', routeName: 'buses'}
    ]
    var panelName = 'AdministrationPanel'
    return {items, panelName}
  }
}
</script>
