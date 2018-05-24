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
      {name: 'Pojazdy', urlLink: '/admin/buses', routeName: 'buses'},
      {name: 'Linie autobusowe', urlLink: '/admin/buslines', routeName: 'buslines'},
      {name: 'Wyświetl przejazdy', urlLink: '/admin/busrides', routeName: 'busrides'},
      {name: 'Generuj przejazdy', urlLink: '/admin/generate-rides', routeName: 'generate-rides'}
    ]
    var panelName = 'AdministrationPanel'
    return {items, panelName}
  }
}
</script>
