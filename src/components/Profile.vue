<template>
    <div class="profile-container">
        <!--<h1>{{user.name}}</h1>-->
        <h1>{{user.name}}</h1>
        <!--<img :src=""alt="">-->
        <threadlist allthreads="false" :threads="evens"></threadlist>
        <div></div>
    </div>
</template>
<!--v-for="(index, thread) in threads"-->

<script>
    import threadlist from "./ThreadList.vue"
    import Mock from "./mock-threads.js"
    export default {
        name: 'profile',
        data: function () {
            return {
                user: {
                    id: 0,
                    name: "asdf",
                    url: "http://",
                    downvotes: 0,
                },
                threads: Mock,
                usersThreads: []
            }
        },
        components: {
            threadlist
        },
        computed: {
            evens() {
                return this.threads.filter(function (t, i) {
                    return (i == 2) 
                })
            },


        }
    }

</script>
