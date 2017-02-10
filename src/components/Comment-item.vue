<template>
    <div class="comment-container">
        <div class="comment-title">
            {{comment.title}}
        </div>
        <vue-markdown>{{comment.text}}</vue-markdown>
        <div class="comment-votes">
            {{comment.upvotes}}
            {{comment.downvotes}}
        </div>
        <div class="comment-comments">
            <comment-list :comments="comment.comments">

            </comment-list>
        </div>
    </div>
</template>

<script>
    import comment from "./Comment-list"
    import VueMarkdown from "vue-markdown"
    export default {
        name: "comment-item",
        methods: {
            setThreadInfo() {
                // Load Tags Date upvotes once the thread has been loaded
            },
        },
        components: {
            VueMarkdown,
            "comment-list":comment
        },
        props: {
            comment: { required: true }
        }
    }

</script>