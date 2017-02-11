<template>
    <router-link :to='{name: "thread-show", params:{id: thread.id}}' class="card-container">
        <div class="thread-title">
            {{thread.title}}
        </div>
        <div class="thread-author">
            {{thread.author}}
        </div>
        <div class="thread-date">
            {{thread.date}}
        </div>
        <div class="thread-upvotes">
            {{thread.upvotes}}
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "threaditem",
        props: {
            thread: {
                type: Object,
                required: true
            }
        }
    }
</script>