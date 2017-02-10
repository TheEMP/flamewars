<template>
    <div class="comment-container">
        <div class="comment-title">
            {{title}}
        </div>
       <vue-markdown>{{text}}</vue-markdown>
       <div class="comment-votes">

       </div>
       <div v-if="comments.length > 0" class="comment-comments">
           <comments v-for="(index, item) in comments" parentId="id" title="item.tittle" id="item.id" author="item.author" text="item.text" upvotes="item.upvotes" downvotes="item.downvotes" comments="item.comments">

           </comments>
       </div>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    export default {
        name: "comments",
        methods:{
            setThreadInfo(){
                // Load Tags Date upvotes once the thread has been loaded
            },
            toggleThreadFavorite(){

            },
            
        },
        components: {
            VueMarkdown
        },
        props:{
            id: {
                type: Number,
                required: true
            },
            parentId: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
             upvotes: {
                type: Number,
                required: true
            },
             downvotes: {
                type: Number,
                required: true
            },
            comments: Array

        }
    }
</script>