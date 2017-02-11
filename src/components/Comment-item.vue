<template>
    <div class="comment-container">
        <div class="comment-title">
            {{comment.title}}
        </div>
        <vue-markdown :source="comment.text"></vue-markdown>
        <div class="comment-votes">
            {{comment.upvotes}}
            {{comment.downvotes}}
        </div>
        <div class="comment-comments">
            <comment-list :comments="comment.comments">

            </comment-list>
        </div>
        <reply :comment="comment" ></reply>
        <edit :comment="comment" :text="comment.text"></edit>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import comments from "./Comment-list"
    import edit from "./Edit"
    import reply from "./Reply"
    export default {
        name: "comment-item",
        methods: {
            setThreadInfo() {
                // Load Tags Date upvotes once the thread has been loaded
            },
        },
        components: {
            VueMarkdown,
            "comment-list":comments,
            edit,
            reply
        },
        props: {
            comment: { required: true }
        },
        data(){
            return {curComment:{title:"Test", author:"test", text:"Hi mom"}}
        },
    }

</script>