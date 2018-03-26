<template>
  <div>
    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <div>
            <nav class="navbar navbar-expand-md vertical-menu m-0 p-0">
              <button class="navbar-toggler" type="button" id="button-toggle" data-toggle="collapse"
                      href="#verticalNavbar"
                      aria-controls="verticalNavbar" aria-expanded="false" aria-label="Toggle navigation">
                Przejdź do...<i class="fas fa-caret-down float-right"></i>
              </button>
              <div class="collapse navbar-collapse" id="verticalNavbar">
                <div class="vertical-menu">
                  <a v-for="item in items" v-bind:key="item.name">{{item.name}}</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="col-md-6 col-lg-9">
          <div class="m-2">
            <h5>{{panelName}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'panelName'],
  mounted () {
    $('.vertical-menu a:first').addClass('active')
  },
  updated () {
    $('.vertical-menu a').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
      $('#button-toggle').click()
    })
  }
}
</script>

<style>
  .vertical-menu {
    width: 100%;
  }

  .vertical-menu a, .vertical-menu button {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
    outline: none;
    width: 100%;
  }

  .vertical-menu a:hover {
    background-color: #ccc;
    cursor: pointer;
  }

  .vertical-menu a.active {
    background-color: #4CAF50;
    color: white;
  }

</style>
