<template>
    <div class="thread-container">
        <div class="thread-title">
            {{thread.name}}
        </div>
        <div class="thread-title">
            {{thread.userId}}
        </div>

       <vue-markdown :source="thread.text"></vue-markdown>
       <reply :comment="thread"></reply>
       <edit :comment="thread" :text="thread.text"></edit>
       <comment-list :comments="thread.comments">
       </comment-list>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import comments from "../comment/Comment-list"
    import edit from "../shared/Edit"
    import reply from "../shared/Reply"
    export default {
        name: "thread",
        methods:{
            toggleThreadFavorite(){

            },
            
        },
        // computed:{
        //     thread(){
        //         let id = this.$route.params.id
        //         return threads.filter(i=>{
        //             if (i.id == id ){
        //                 return i
        //             }
        //         })[0]
        //     }
        // },
        mounted() {
            console.log(this.$route.params.id)
             axios.get("api/threads/"+this.id).then(res => {
                console.log("thread", res.data.data)
                this.thread = res.data.data
            }).catch(err => {
                console.log(err)
            })
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
                thread: {}
            }
        }
    }
</script>