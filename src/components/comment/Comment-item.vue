<template>
    <div class="comment-container card card-panel grey darken-1">
        <div class="comment-title">
            {{comment.title}}
        </div>
        <vue-markdown :source="comment.text"></vue-markdown>
        <div class="comment-votes">
            <!--{{comment.upvotes}} {{comment.downvotes}}-->
        </div>
         <reply :comment="comment"></reply>
        <edit :comment="comment" :text="comment.text"></edit>
        <div v-if="comments.length > 0" class="comment-comments">
            <comment-list onThread="false" :parent="comment" :comments="comments">

            </comment-list>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueMarkdown from "vue-markdown"
    //import commentslist from "./Comment-list"
    import edit from "../shared/Edit"
    import reply from "../shared/Reply"
    export default {
        name: "comment-item",
        methods: {
            setThreadInfo() {
                // Load Tags Date upvotes once the thread has been loaded
            },
        },
        components: {
            VueMarkdown,
            edit,
            reply
        },
        props: {
            comment: { required: true },
            onThread: Boolean
        },
        computed: {
            subComments() {
                return this.comment.comments.filter(e => {
                    if (e.commentId === this.comment._id) {
                        return e
                    }
                })
            }
        },
        mounted() {
            let vm = this
            try {
                console.log("here", vm.comment)
                if (vm.comments.commentId) {
                    return
                }
                axios.get("api/comments?commentId=" + vm.comment._id).then(res => {
                    console.log("subcomments", res)
                    vm.comments = res.data.data
                }).catch(err => {
                    console.log(err)
                })
            }
            catch (e) {
                console.log(e)
            }

        },
        data() {
            return { comments: [] }
        },
        beforeCreate: function () {
            this.$options.components.commentList = require('./Comment-list.vue')
        }
    }

</script>