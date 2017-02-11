<template>
    <div class="edit-container">
        <button @click="toggle">Edit</button>
        <form @submit.prevent v-if="active">
            <textarea rows="8" cols="100" v-model="msgText">

            </textarea>
            <button type="submit">Comfirm Edit</button>
        </form>
        <VueMarkdown v-if="active" :source="msgText">
        </VueMarkdown>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    export default {
        name: "edit",
        methods: {
            toggle() {
                this.active = !this.active
            },
            save() {
                //
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