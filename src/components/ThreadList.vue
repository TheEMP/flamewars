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
                curPage: 0
            }
        },
        props: {
            threads: {type: Array, default: function() {return mockdata}}
        },
        mounted() {
            // Load List of threads
            console.log(this.threads)
            var totalNeeded = Math.ceil(this.threads.length/20)
            var count = 0 
            this.totalthreads = Array.from({length:totalNeeded}, x => count += 1)
            console.log(this.totalthreads, totalNeeded)

        },
        computed: {
            threadCount() {
                return this.threads.length
            }
        },
        methods:{
            ChangePage(page){
                if (page === this.curPage){
                    return
                }

                if (!this.totalthreads[page]){
                    return
                }
            }
        },
        components:{
            threaditem
        }
    }

</script>