<template>
  <div>
    <div class="container mt-4 mb-4">
      <div v-if="$mq.resize && $mq.above('600px')">
        <div class="row">
          <div class="col-3">
            <div>
              <div class="vertical-menu" >
                <a href="#" class="active">Kierowcy</a>
                <a href="#">Przystanki</a>
                <a href="#">Trasy</a>
                <a href="#">Linie autobusowe</a>
                <a href="#">Rozkłady jazdy</a>
                <a href="#">Pojazdy</a>
              </div>
            </div>
          </div>
          <div class="col-9"></div>
        </div>
      </div>
      <div v-else>
        <div class="container">
          <div class="btn-group vertical-menu">
            <button type="button" class="btn btn-success btn-width">Przejdź do...</button>
            <button class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
            </button>
          </div>
          <div class="collapse vertical-menu" id="collapseExample">
            <a href="#">Kierowcy</a>
            <a href="#">Przystanki</a>
            <a href="#">Trasy</a>
            <a href="#">Linie autobusowe</a>
            <a href="#">Rozkłady jazdy</a>
            <a href="#">Pojazdy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .vertical-menu {
    width: 100%;
  }

  .vertical-menu a {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
  }

  .vertical-menu a:hover {
    background-color: #ccc;
    cursor: pointer;
  }
  .vertical-menu a.active {
    background-color: #4CAF50; /* Add a green color to the "active/current" link */
    color: white;
  }
  .btn-width {
    width: 95%;
  }
</style>

<script>
$(document).ready(function () {
  $('.vertical-menu a').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
})
</script>
