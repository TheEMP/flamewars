<template>
    <div class="thread-container">
        <router-view></router-view>
        <ul class="collection">
            <threaditem v-for="(item, index) in threads" :id="index" :thread="item">
            </threaditem>
        </ul>
        <div class="pagenation-holder">
            <div v-for="(item,index) in totalthreads" class="pagenation">
                {{index + 1}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import threaditem from "./Thread-item"
    
    //console.log(mockdata)
    export default {
        name: "threadlist",
        data() {
            return {
                totalthreads: [],
                curPage: 0,
                curThreads: []
            }
        },
        props: {
            threads: { type: Array },
            allthreads: { type: Boolean, default() { return true } }
        },
        mounted() {
            // Load List of threads
            if (this.allthreads) {

            }
            // console.log(this.threads)
            // var totalNeeded = Math.ceil(this.threads.length/20)
            // var count = 0 
            // this.totalthreads = Array.from({length:totalNeeded}, x => count += 1)
            // console.log(this.totalthreads, totalNeeded)

        },
        computed: {
            threadCount() {
                return this.threads.length
            }
        },
        methods: {
            changePage(page) {
                if (page === this.curPage) {
                    return
                }

                if (!this.totalthreads[page]) {
                    return
                }
            }
        },
        components: {
            threaditem,
            
        }
    }

</script>