<template>
    <div class="user-container">
       <router-link :to="{name:'user.show', params:{id: user._id}}">{{user.name}}</router-link> 
    </div>
</template>

<script>
    import users from "./User-list"
    export default {
        name: "user-item",
        methods: {
            setThreadInfo() {
                // Load Tags Date upvotes once the thread has been loaded
            },
        },
        props: {
            user: { required: true }
        },
        data(){
            return{}
        },
    }

</script> 