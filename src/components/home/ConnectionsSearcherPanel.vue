<template>
  <div class="container my-3 px-2">
    <div class="card">
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
              :picker-options="pickerOptions"
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
              :picker-options="pickerOptions1"
              :disabled="this.value1 == null"
              v-model="value2"
              type="date"
              placeholder="Pick a day">
            </el-date-picker>
          </div>
        </div>
        <div class="my-2">
          <label for="passengers"><i class="fas fa-users"></i> Pasażerowie</label>
          <input type="number" id="passengers" min="0" class="form-control input-width"/>
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
      value1: null,
      value2: null,
      pickerOptions: {
        disabledDate (date) {
          return date.getTime() + 86400000 < Date.now()
        }
      },
      pickerOptions1: {
        disabledDate: (date) => {
          return date.getTime() < this.value1
        }
      }
    }
  }
}
</script>

<style scoped>
  .select-width {
    width: 180px;
  }
  .container {
    font-size: small;
  }
  .input-width {
    width: 100px
  }
  .card >>> .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 180px;
  }
</style>
