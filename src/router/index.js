import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import LoginRoutes from './login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    HomeRoutes,
    LoginRoutes
  ]
})
