<template>
	<li class="list-group-item">
		<i class="glyphicon glyphicon-chevron-up" @click="upvote"></i>
		<span class="label label-primary">{{ votes }}</span>
		<i class="glyphicon glyphicon-chevron-down" @click="downvote"></i>
		<a>{{ post.title }}</a>
	</li>
</template>
<script>
    export default {
        name: "flamevote",
        props: {post: Object},
        data: function () {
            return {
                upvoted: false,
                downvoted: false
            };
        },
        methods: {
            upvote: function () {
                this.upvoted = !this.upvoted;
                this.downvoted = false;
            },
            downvote: function () {
                this.downvoted = !this.downvoted;
                this.upvoted = false;
            }
        },
        computed: {
            votes: function () {
                if (this.upvoted) {
                    return this.post.votes + 1;
                } else if (this.downvoted) {
                    return this.post.votes - 1;
                } else {
                    return this.post.votes;
                }
            }
        }
    }

</script>