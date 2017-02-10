<template>
    <div class="thread-container">
        <threaditem v-for="(item, index) in threads" :thread="item">
        </threaditem>
        <div class="pagenation-holder">
            <div v-for="(item,index) in totalthreads"  class="pagenation">
                {{index + 1}}
            </div>
        </div>
    </div>
</template>

<script>
    import mockdata from "./mock-threads.js"
    import threaditem from "./thread-item"
    //console.log(mockdata)
    export default {
        name: "threadlist",
        data() {
            return {
                totalthreads: [],
                curpage: 0
            }
        },
        props: {
            threads: {type: Array, default: function() {return mockdata}}
        },
        mounted() {
            // Load List of threads
            console.log(this.threads)
            //this.totalthreads = Array.from(Number, ())
        },
        components:{
            threaditem
        }
    }

</script>

<threadlist :threads="{}"></threadlist>