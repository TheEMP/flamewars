<template>
    <div class="user-container">
        {{
            user.name
        }}
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