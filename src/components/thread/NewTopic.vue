<template>
    <div class="topic-container">
        <div class="input-field">
            <form @submit.prevent="post">
                <input type="text" v-model="title" />
                <textarea id="textarea1" rows="8" cols="100" v-model="text">

                </textarea>
                <button type="submit">Post!</button>
                <label for="textarea1">Thread Title</label>
            </form>
            
            <VueMarkdown :source="text">
            </VueMarkdown>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import axios from 'axios'
    import cookies from '../../assets/getCookies.js'
    export default {
        name: "newtopic",
        methods: {
            post() {
                axios.post("api/threads", {
                    name: this.title,
                    text: this.text,
                    userId: cookies("userId")
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