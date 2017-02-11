<template>
    <div class="reply-container">
        <div v-for="item in tags" class="chip">
            <img v-if="item.image" :src="item.image" :alt="item.name">
            {{item.name}}
         </div>
    </div>
</template>

<script>
    export default {
        name: "tags",
        methods: {
            
        },
        // data(){
        //     return {
        //         msgText: this.text,
        //         active: false
        //     }
        // },
        // components: {
        //     VueMarkdown
        // },
        props: {
            userId: String,
            parentId: String,
            tags:[]
        },
    }

</script>