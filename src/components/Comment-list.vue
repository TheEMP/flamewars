<template>
    <div class="comment-container">
        <form @submit.prevent="addComment">
            <input v-model="curComment.author" type="text">
            <input v-model="curComment.text" type="text">
            <input v-model="curComment.title" type="text">
            <button type="submit">Click me</button>
        </form>
        <comment-item v-for="(item, index) in comments" :comment="item">
        </comment-item>
    </div>
</template>

<script>
    import comment from "./Comment-item"
    import VueMarkdown from "vue-markdown"
    //import threads from "./mock-threads.js"
    export default {
        name: "comment-list",
        methods: {
            setThreadInfo() {
                // Load Tags Date upvotes once the thread has been loaded
            },
            addComment() {
                this.$parent.addComment(this.curComment)
            },

        },
        data(){
            return {curComment:{title:"Test", author:"test", text:"Hi mom"}}
        },
        components: {
            VueMarkdown,
            "comment-item":comment
        },
        props: {
            comments: Array
        }
    }

</script>