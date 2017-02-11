<template>
    <div class="thread-container">
        <div class="card blue-grey darken-1 white-text">
            <div class="row">
                <div class="col s12">
                    <h1>Title: {{thread.name}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <p class="flow-text">{{thread.userId}}</p>
                    
                </div>
            </div>

            <vue-markdown :source="thread.text"></vue-markdown>
            <div class="row">
                <div class="col s12">
                    <edit :comment="thread" :text="thread.text"></edit>
                    <reply :comment="thread"></reply>
                </div>
            </div>
        </div>
        <comment-list onThread="true" :parent="thread" :comments="thread.comments"></comment-list>

    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import comments from "../comment/Comment-list"
    import edit from "../shared/Edit"
    import reply from "../shared/Reply"
    export default {
        name: "thread",
        methods: {
            toggleThreadFavorite() {

            },

        },
        mounted() {
            let vm = this
            console.log(this.$route.params.id)
            axios.get("api/threads/" + this.id).then(res => {
                console.log("thread", res.data.data)
                vm.thread = res.data.data
                axios.get("api/comments?threadId=" + vm.id).then(res => {
                    console.log(res)
                    vm.thread.comments = res.data.data
                })
            }).catch(err => {
                console.log(err)
            })
        },
        components: {
            VueMarkdown,
            "comment-list": comments,
            reply,
            edit
        },
        methods: {
            addComment(c) {
                c.id = Math.random()
                this.threads.push(c)
            }
        },
        props: {
            id: { default() { return this.$route.params.id } }
        },
        data() {
            return {
                thread: { comments: [] }
            }
        }
    }

</script>