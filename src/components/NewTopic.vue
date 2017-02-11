<template>
    <div class="topic-container">
        <form @submit.prevent>
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
    export default {
        name: "newtopic",
        methods: {
            post() {
                //
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