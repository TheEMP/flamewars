<template>
    <div class="profile-container">
        <h1>{{user.name}}</h1>
        
        <threadlist :threads="evens"></threadlist>
        <div></div>
    </div>
</template>

<script>
    import threadlist from "../thread/ThreadList.vue"
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
