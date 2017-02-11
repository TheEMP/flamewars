<template>
    <div class="topic-container">
        <form @submit.prevent="post">
            <input type="text" v-model="title" />
            <textarea rows="8" cols="100" v-model="text">

            </textarea>
            <button type="submit">Post!</button>
        </form>
        <VueMarkdown :source="text">
        </VueMarkdown>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import axios from 'axios'
    export default {
        name: "newtopic",
        methods: {
            post() {
                axios.post("api/threads", {
                    name: this.title,
                    text: this.text,
                    userId: "589e58c453c96b2accf44cc6"
                }).then(res =>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        data(){
            return {
                text: "New Post",
                title: "",
                tags: []
            }
        },
        components: {
            VueMarkdown
        },
    }

</script>