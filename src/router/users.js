import userList from '../components/users/User-list.vue'
import Profile from '../components/users/Profile'
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
      path: "/login",
      name: "login",
      component: login
    }
]