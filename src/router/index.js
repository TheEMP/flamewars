import Vue from 'vue'
import Router from 'vue-router'
import threadRoutes from "./thread.js"
import usersRoutes from "./users.js"

Vue.use(Router)

export default new Router({
  routes: [
    ...threadRoutes,
    ...usersRoutes
  ]
})


