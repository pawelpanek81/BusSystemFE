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
      {name: 'Moje bilety', urlLink: '/customer'},
      {name: 'Moje dane', urlLink: '/customer'},
      {name: 'Wyszukaj połączenie', urlLink: '/customer'}
    ]
    var panelName = 'CustomerPanel'
    return {items, panelName}
  }
}
</script>
