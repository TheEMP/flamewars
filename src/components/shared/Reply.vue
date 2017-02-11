<template>
    <div class="reply-container">
        <button class="waves-effect waves-green green btn" @click="toggle">Comment</button>
        <div class="row">
            <div class="col s6 offset-s3">


                <form @submit.prevent="addComment" v-if="active">
                    <textarea class="materialize-textarea" rows="8" cols="100" v-model="msgText"></textarea>
                    <blockquote>
                    <VueMarkdown class="left-align" v-if="active" :source="msgText">
                    </VueMarkdown>
                </blockquote>
                    <button type="submit" class="waves-effect waves-light btn-large green"><i class="material-icons">&#xE8CD;</i>New Reply</button>
                </form>
            </div>
        </div>

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
                console.log("comment", this.comment)
                if (this.comment.name) {
                    axios.post("api/comments", {
                        text: this.msgText,
                        threadId: this.comment._id,
                        userId: cookies("userId")
                    }).then(rep => {
                        console.log(rep)
                        updateThreadData()
                    }).catch(err => {
                        console.log(err)
                    })
                }
                else {
                    axios.post("api/comments", {
                        text: this.msgText,
                        commentId: this.comment._id,
                        userId: cookies("userId")
                    }).then(res => {
                        console.log("commentIdone", res)
                    }).catch(err => {
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