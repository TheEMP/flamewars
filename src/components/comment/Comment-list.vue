<template>
    <div class="comment-container">
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
        
        components: {
            VueMarkdown,
            "comment-item":comment
        },
        props: {
            comments: Array
        }
    }

</script>