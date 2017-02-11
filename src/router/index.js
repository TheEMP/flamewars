import Vue from 'vue'
import Router from 'vue-router'
import thread from '../components/Thread'
import threads from "../components/AllThreads"
import newThread from "../components/NewTopic"
import Profile from '../components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/threads',
      name: 'threads',
      component: threads,
      children: [{
        path: 'new',
        name: 'create-thread',
        component: newThread
      }]
    },
    {
      path: '/thread/:id',
      name: 'thread-show',
      component: thread
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})


