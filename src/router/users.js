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
    component: profile
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