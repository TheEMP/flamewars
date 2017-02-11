
import Profile from '../components/users/Profile'
import login from "../components/users/Login"
export default [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
]