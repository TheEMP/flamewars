<template>
    <div class="profile-container">
         <nav class="nav-extended">
    
    <div class="nav-content center-align">
      <ul class="tabs tabs-transparent ">
        <router-link class = "tab" active-class= "active" tag = "li" :to = "{name:'profile.threads'}"><a>My Threads</a></router-link>
        <router-link class = "tab" active-class= "active" tag = "li" :to = "{name:'profile.comments'}"><a>My Comments</a></router-link>
        
      </ul>
    </div>
  </nav>
  <div class="card-panel">

      <router-view></router-view>
  </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import cookies from '../../assets/getCookies.js'
    export default {
        name: 'profile',
        data() {
            return {
                // user: {
                //     userId: cookies("userId"),
                //     name: "asdf",
                //     url: "http://",
                //     downvotes: 0,
                // },
                threads: [],
                comments: [],
                // usersThreads: []
            }
        },
        props: {user: {
            type:Object,
            default: ()=>({
                    userId: cookies("userId"),
                    name: "asdf",
                    url: "http://",
                    downvotes: 0,
                })
        }},
        components: {
            
        },
        mounted() {
            axios.get(`api/threads?userId=${this.user.userId}`).then(res => {
                console.log("thread", res.data.data)
                this.threads = res.data.data
            }).catch(err => {
                console.log(err)
            }),
                axios.get(`api/comments?userId=${this.user.userId}`).then(res => {
                    console.log("comment", res.data.data)
                    this.comments = res.data.data
                }).catch(err => {
                    console.log(err)
                })

        },
        computed: {
            userThreads() {
                return this.threads.map(function (t) {
                    return (t)
                })
            },
            userComments() {
                return this.comments.map(function (t) {
                    return (t)
                })
            }


        }
    }

</script>