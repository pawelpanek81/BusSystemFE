<template>
  <div class="container my-3 px-2">
    <div class="card ">
      <div class="card-body">
        ODJAZD <el-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'connections-searcher',
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>
  .card-size {
    width: 100%;
    height: 100px;
  }
</style>
