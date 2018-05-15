<template>
  <div>
    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <div>
            <nav class="navbar navbar-expand-md vertical-menu m-0 p-0">
              <button class="navbar-toggler vertical-menu" type="button" id="button-toggle" data-toggle="collapse"
                      href="#verticalNavbar"
                      aria-controls="verticalNavbar" aria-expanded="false" aria-label="Toggle navigation">
                Przejdź do...<i class="fas fa-caret-down float-right"></i>
              </button>
              <div class="collapse navbar-collapse" id="verticalNavbar">
                <div class="vertical-menu">
                  <router-link v-for="item in items" v-bind:key="item.name" :to="{path: item.urlLink}"
                               ref="tab" :class="{active:item.routeName == selected} " v-on:click.native=" selected = item.routeName"
                  exact-active-class="" active-class="">
                    {{item.name}}
                  </router-link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="col-md-8 col-lg-9">
          <div class="m-2">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'panelName'],
  data () {
    return {
      selected: undefined
    }
  },
  mounted () {
    this.selected = this.$route.path.split('/')[2]
    $('.navbar>#verticalNavbar').on('click', function () {
      $('.navbar-collapse').collapse('hide')
    })
  }
}
</script>

<style scoped>
  .vertical-menu {
    width: 100%;
  }

  .vertical-menu a {
    background-color: rgba(245, 245, 245, 0.52);
    color: black;
    display: block;
    padding: 12px;
    margin: 1px;
    text-decoration: none;
    border-radius: 5px;
  }

  .vertical-menu button {
    background-color: rgba(248, 248, 248, 0.17);
    color: black;
    padding: 12px;
    text-decoration: none;
  }

  .vertical-menu a:hover {
    background-color: #eaeaea;
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
