<template>
    <div class="profile-container">
        <!--<h1>{{user.name}}</h1>-->
        <h1>{{user.name}}</h1>
<<<<<<< HEAD
        <img src="" alt="">
        <threadlist :threads="evens"></threadlist>
=======
        <!--<img :src=""alt="">-->
        <threadlist allthreads="false" :threads="evens"></threadlist>
>>>>>>> 6a801b0967653bfeba73efcbdd63b92231d66e5f
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
