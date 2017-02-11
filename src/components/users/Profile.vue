<template>
    <div class="profile-container">
        <!--<h1>{{user.name}}</h1>-->
        <h1>{{user.name}}</h1>
        
        <threadlist :threads="evens"></threadlist>
        <div></div>
    </div>
</template>
<!--v-for="(index, thread) in threads"-->

<script>
    import threadlist from "../thread/ThreadList.vue"
   // import Mock from "./mock-threads.js"
    export default {
        name: 'profile',
        data: function () {
            return {
                threads: [],
                usersThreads: []
            }
        },
        props: ['user'],
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
