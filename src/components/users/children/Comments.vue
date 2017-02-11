<template>
    <div class="profile-container">
        <h1>Comments</h1>
        <commentlist :comments="usercomments"></commentlist>
    </div>
</template>

<script>
    import commentlist from "../../comment/Comment-list"
    export default {
        name: "profile-comments",
        data() {
            return {

            }
        },
        components: {
            commentlist
        },
        computed: {
            usercomments() {
                return this.$parent.usercomments
            }
        }
    }

</script>