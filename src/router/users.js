<<<<<<< HEAD
import userList from '../components/users/User-list.vue'
import Profile from '../components/users/Profile'
import Show from '../components/users/Show'
=======

import profile from '../components/users/Profile'
import auth from "../components/users/Auth"
>>>>>>> 256c6c85e369cb9f74ef1ed5870bf1709e084b71
import login from "../components/users/Login"
import register from "../components/users/Register"
export default [
<<<<<<< HEAD
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/users',
      name: 'users',
      component: userList
    },
    {
      path: '/user/:id',
      name: 'user.show',
      component: Show
    },
    {
      path: "/login",
      name: "login",
=======
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    children: [
      {
        path: 'threads',
        name: 'profile.threads',
        template: `
         <h1>Threads</h1>
        <threadlist :threads="userThreads"></threadlist>
        `
      },
      {
        path: 'comments',
        name: 'profile.comments',
        template: `       <h1>Comments</h1>
        <threadlist v-for="comment in comments">{{comment.text}} <br>  {{comments.length}} Comment </threadlist>`
      },
    ]
  },
  {
    path: "/auth",
    name: "auth",
    component: auth,
    children: [{
      path: "register",
      name: "auth.register",
      component: register
    }, {
      path: "login",
      name: "auth.login",
>>>>>>> 256c6c85e369cb9f74ef1ed5870bf1709e084b71
      component: login
    }]
  }
]