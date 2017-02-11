<template>
    <div class="user-container">
        <h1>Hello</h1>
        <user-item v-for="(item, index) in users" :user="item">
        </user-item>
    </div>
</template>

<script>
    import user from "./User-item"
    import VueMarkdown from "vue-markdown"
    //import threads from "./mock-threads.js"
    export default {
        name: "user-list",
        methods: {

        },
        data: function(){
            return {
                users:[]
            }
        },

        mounted: function(){
            let vm = this
            axios.get('/api/users')
            .then(function(data){
                vm.users = data.data.data
            })
            .catch(console.error)
        },
        
        components: {
            VueMarkdown,
            "user-item":user
        },
    }

</script>