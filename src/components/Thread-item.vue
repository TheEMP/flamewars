<template>
    <router-link :to='{name: "thread-show", params:{id: thread._id}}' class="card-container">
        <div class="thread-title">
            {{thread.name}}
        </div>
        <div class="thread-author">
            {{thread.userId}}
        </div>
        <div class="thread-date">
            {{thread.created}}
        </div>
        <div class="thread-upvotes">
            <!--{{thread.upvotes}}-->
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