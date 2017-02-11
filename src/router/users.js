
import userList from '../components/users/User-list.vue'
import Profile from '../components/users/Profile'
import Show from '../components/users/Show'
<<<<<<< HEAD

import profile from '../components/users/Profile'
import auth from "../components/users/Auth"
import profileThreads from "../components/users/children/Threads.vue"
import profileComments from "../components/users/children/Comments.vue"
=======
import profile from '../components/users/Profile'
import auth from "../components/users/Auth"
>>>>>>> a605fbfe0afd72416c1ad95f41194e243cc58be9
import login from "../components/users/Login"
import register from "../components/users/Register"
export default [
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
<<<<<<< HEAD
  {
    path: "/login",
    name: "login",
  },


=======
>>>>>>> a605fbfe0afd72416c1ad95f41194e243cc58be9
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    children: [
      {
        path: 'threads',
        name: 'profile.threads',
        component: profileThreads
      },
      {
        path: 'comments',
        name: 'profile.comments',
        component: profileComments
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
      component: login
    }]
  }
]