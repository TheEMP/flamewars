<template>
    <div class="reply-container">
        <button @click="toggle">Comment</button>
        <form @submit.prevent v-if="active">
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
    export default {
        name: "reply",
        methods: {
            toggle() {
                // Load Tags Date upvotes once the thread has been loaded
                this.active = !this.active
            },
            save() {
                
            }
        },
        data(){
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