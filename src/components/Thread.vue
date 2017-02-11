<template>
    <div class="thread-container">
        <div class="thread-title">
            {{thread.title}}
        </div>
        <div class="thread-title">
            {{thread.author}}
        </div>

       <vue-markdown :source="thread.text"></vue-markdown>
       <reply :comment="thread"></reply>
       <edit :comment="thread" :text="thread.text"></edit>
       <comment-list :comments="threads">
       </comment-list>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import threads from "./mock-threads.js"
    import comments from "./Comment-list"
    import edit from "./Edit"
    import reply from "./Reply"
    export default {
        name: "thread",
        methods:{
            toggleThreadFavorite(){

            },
            
        },
        computed:{
            thread(){
                let id = this.$route.params.id
                return threads.filter(i=>{
                    if (i.id == id ){
                        return i
                    }
                })[0]
            }
        },
        mounted() {
            console.log(this.$route.params.id)
            
        },
        components: {
            VueMarkdown,
            "comment-list":comments,
            reply,
            edit
        },
        methods:{
            addComment(c) {
                c.id =Math.random()
                this.threads.push(c)
            }
        },
        props:{
            id:{default() {return this.$route.params.id}}
        },
        data() {
            return {
                threads: threads
            }
        }
    }
</script>