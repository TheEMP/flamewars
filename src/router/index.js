import Vue from 'vue'
import Router from 'vue-router'
import thread from '../components/Thread'
import threads from "../components/ThreadList"
import Profile from '../components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/threads',
      name: 'threads',
      component: threads
    },
     {
      path: '/thread/:id',
      name: 'thread-show',
      component: thread
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})


