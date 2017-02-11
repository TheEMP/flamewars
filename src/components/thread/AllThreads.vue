<template>
    <div class="thread-container">
        <threadlist :threads="threads">
        </threadlist>
    </div>
</template>

<script>
    import axios from 'axios'
    import threadlist from "./ThreadList"
    //console.log(mockdata)
    export default {
        name: "allthreads",
        data() {
            return {
                threads: [],
                curPage: 0
            }
        },
        mounted() {
            // Load List of threads
            axios.get("api/threads").then(res => {
                console.log("thread", res.data)
                this.threads = res.data.data
            }).catch(err => {
                console.log(err)
            })
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
            threadlist
        }
    }

</script>