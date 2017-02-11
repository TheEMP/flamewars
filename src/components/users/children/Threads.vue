<template>
    <div class="profile-container">
        <h1>Threads</h1>
        <threadlist :threads="userThreads"></threadlist>
    </div>
</template>

<script>
    import threadlist from "../../thread/ThreadList"
    export default {
        name: "profile-threads",
        data() {
            return {

            }
        },
        components: {
            threadlist
        },
        computed: {
            userThreads() {
                return this.$parent.userThreads
            }
        }
    }

</script>