<template>
    <div v-for"(index, item) in threads" class="card-container">
        <div class="thread-title">
            {{item.title}}
        </div>
        <div class="thread-author">
            {{item.author}}
        </div>
        <div class="thread-date">
            {{item.date}}
        </div>
        <div class="thread-upvotes">
            {{item.upvotes}}
        </div>

        <div class="pagenation-holder">
            <div v-for="(index, item) in totalthreads" :click="openThread(index)" class="pagenation">
                {{index + 1}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "threadlist",
        data() {
            return {
                threads: [],
                totalthreads: [],
                curpage: 0
            }
        },
        mounted(){
            // Load List of threads

            this.totalthreads = Array.from(Number, ())
        },
        components: {
            VueMarkdown
        }, 
        methods: {
            openThread(id) {

            }
        }
    }
</script>