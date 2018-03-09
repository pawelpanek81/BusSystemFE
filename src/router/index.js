import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import LoginRoutes from './login'
import Registration from './registration'

Vue.use(Router)

export default new Router({
  routes: [
    HomeRoutes,
    LoginRoutes,
    Registration
  ]
})
