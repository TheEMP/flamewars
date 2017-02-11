
import profile from '../components/users/Profile'
import auth from "../components/users/Auth"
import login from "../components/users/Login"
import register from "../components/users/Register"
export default [
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
      component: login
    }]
  }
]