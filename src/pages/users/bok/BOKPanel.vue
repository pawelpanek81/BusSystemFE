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
      {name: 'Aktualności', urlLink: '/bok/addnews', routeName: 'addnews'}
    ]
    var panelName = 'BokPanel'
    return {items, panelName}
  }
}
</script>
