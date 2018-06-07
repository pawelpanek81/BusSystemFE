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
      {name: 'Rezerwuj bilet', urlLink: '/bok', routeName: ''},
      {name: 'Aktualności', urlLink: '/bok/addnews', routeName: 'addnews'},
      {name: 'Zarządzaj kursami', urlLink: '/bok', routeName: 'courses'}
    ]
    var panelName = 'BokPanel'
    return {items, panelName}
  }
}
</script>
