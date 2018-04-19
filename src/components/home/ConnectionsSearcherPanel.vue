<template>
  <div class="container my-3 px-2">
    <div class="card ">
      <div class="row d-flex align-items-end justify-content-around mx-1 my-3">
        <div class="my-2">
          <label for="from"><i class="fas fa-map-marker-alt"></i> Z</label>
          <div id="from">
            <select class="custom-select select-width">
              <option selected>Wrocław</option>
              <option>Kraków</option>
              <option>Lublin</option>
            </select>
          </div>
        </div>
        <div class="my-2">
          <label for="to"><i class="fas fa-map-marker-alt"></i> Do</label>
          <div id="to">
            <select class="custom-select select-width">
              <option selected>Rzeszów</option>
              <option>Kraków</option>
              <option>Lublin</option>
            </select>
          </div>
        </div>
        <div class="my-2">
          <label for="startDate"><i class="fas fa-calendar-alt"></i> Odjazd</label>
          <div id="startDate">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
          </div>
        </div>
        <div class="my-2">
          <label for="endDate"><i class="fas fa-calendar-alt"></i> Przyjazd</label>
          <div id="endDate">
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
          </div>
        </div>
        <div class="my-2">
          <button class="btn btn-success">Szukaj połączenia</button>
        </div>
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
  .select-width {
    min-width: 200px;
  }
</style>
