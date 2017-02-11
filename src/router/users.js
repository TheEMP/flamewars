
import profile from '../components/users/Profile'
import auth from "../components/users/Auth"
import login from "../components/users/Login"
import register from "../components/users/Register"
export default [
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
      component: login
    }]
  }
]