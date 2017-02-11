<template>
    <div class="reply-container">
        <button @click="toggle">Comment</button>
        <form @submit.prevent="addComment" v-if="active">
            <textarea rows="8" cols="100" v-model="msgText">

            </textarea>
            <button type="submit">Comfirm Post</button>
        </form>
        <VueMarkdown v-if="active" :source="msgText">
        </VueMarkdown>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import axios from "axios"
    import cookies from '../../assets/getCookies.js'
    export default {
        name: "reply",
        methods: {
            toggle() {
                this.active = !this.active
            },
            addComment() {
                console.log("comment",this.comment)
                if (this.comment.name) {
                    axios.post("api/comments", {
                        text: this.msgText,
                        threadId: this.comment._id,
                        userId: cookies("userId")
                    }).then(rep=>{
                        console.log(rep)
                    }).catch(err=>{
                        console.log(err)
                    })
                }
                else  {
                    axios.post("api/comments", {
                        text: this.msgText,
                        commentId: this.comment._id,
                        userId: cookies("userId")
                    }).then(res=>{
                        console.log("commentIdone", res)
                    }).catch(err=>{
                        console.log(err)
                    })
                }

            }
        },
        data() {
            return {
                msgText: this.text,
                active: false
            }
        },
        components: {
            VueMarkdown
        },
        props: {
            text: String,
            comment: Object
        },
    }

</script>