import userList from '../components/users/User-list.vue'
import Profile from '../components/users/Profile'
import Show from '../components/users/Show'
import login from "../components/users/Login"
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
    {
      path: "/login",
      name: "login",
      component: login
    }
]