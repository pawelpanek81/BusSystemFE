<template>
  <panel :items="items" :panelName="panelName"></panel>
</template>

<script>
import panel from '@/components/Panel'

export default {
  components: {
    panel
  },
  data: function () {
    var items = [
      {name: 'Kierowcy', urlLink: ''},
      {name: 'Przystanki', urlLink: ''},
      {name: 'Trasy', urlLink: ''},
      {name: 'Linie autobusowe', urlLink: ''},
      {name: 'Rozkłady jazdy', urlLink: ''},
      {name: 'Pojazdy', urlLink: ''}
    ]
    var panelName = 'AdministrationPanel'
    return {items, panelName}
  }
}
</script>
