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
      {name: 'Kierowcy', urlLink: '/admin/drivers'},
      {name: 'Przystanki', urlLink: '/admin/busstops'},
      {name: 'Trasy', urlLink: '/admin/routes'},
      {name: 'Linie autobusowe', urlLink: '/admin/buslines'},
      {name: 'Rozkłady jazdy', urlLink: '/admin/timetables'},
      {name: 'Pojazdy', urlLink: '/admin/buses'}
    ]
    var panelName = 'AdministrationPanel'
    return {items, panelName}
  }
}
</script>
