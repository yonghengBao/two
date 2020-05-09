import Vue from 'vue'
import Router from 'vue-router'
import { constRoutes } from '@/router/constRouters'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: constRoutes
})
