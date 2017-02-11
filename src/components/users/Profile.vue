<template>
    <div class="profile-container">
        <h1>Threads</h1>
        <threadlist :threads="userThreads"></threadlist>

        <h1>Comments</h1>
        <threadlist v-for="comment in comments">{{comment.text}} <br>  {{comments.length}} Comment </threadlist>
        <div></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import threadlist from "../thread/ThreadList.vue"
    import cookies from '../../assets/getCookies.js'
    export default {
        name: 'profile',
        data() {
            return {
                user: {
                    userId: cookies("userId"),
                    name: "asdf",
                    url: "http://",
                    downvotes: 0,
                },
                threads: [],
                comments: []
            }
        },
        components: {
            threadlist
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