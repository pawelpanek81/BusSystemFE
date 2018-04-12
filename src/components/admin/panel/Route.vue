<template>
  <div>
    <h5>Linia nr P3 Wrocław <i class="fas fa-long-arrow-alt-right"></i> Lublin</h5>
    <div class="row" v-for="busStop in busStops" v-bind:key="busStop.id">
      <div class="busStop mr-2"/>
      <div class="align-self-center">
        {{busStop.city}}, {{busStop.address}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      busStops: [
        {
          id: 0,
          address: 'Sucha 34',
          city: 'Wrocław',
          name: 'Dworzec Autobusowy, Wroclavia'
        },
        {
          id: 1,
          address: 'Olszewskiego 14',
          city: 'Kraków',
          name: 'Dworzec Główny 02'
        },
        {
          id: 2,
          address: 'Piłsudskiego 10',
          city: 'Rzeszów',
          name: 'Piłsudskiego 02'
        },
        {
          id: 3,
          address: 'Kowala 10',
          city: 'Lublin',
          name: 'Zoo Lublin'
        }
      ],
      busStops2: []
    }
  }
}
</script>
<style>
  .busStop {
    background-image: url('../../../../static/images/busStopIcon.png');
    background-size: contain;
    height: 50px;
    width: 25px;
  }
</style>
