<template>
    <router-link :to='{name: "thread-show", params:{id: thread._id}}'>
        <li :class="{gray:id %2 === 0}" class="collection-item avatar">

            <div class="left">
                <i class="material-icons hoverable circle">folder</i>
                <span class="title">{{thread.name}}</span>
            </div>

            <div class="center-align">
                <div class=" thread-author">
                    {{thread.userId}}
                </div>
                <div class="center-align thread-date">
                    
                    <timeago :since="thread.created" :auto-update="60"></timeago>
                </div>
                <div class=" thread-upvotes">
                    <!--{{thread.upvotes}}-->
                </div>
                <div v-for="tag in thread.tags" class="chip">{{tag}}</div>
            </div>

        </li>
    </router-link>
</template>

<script>
    import flame from "./UpVote"
    export default {
        name: "threaditem",
        props: {
            thread: {
                type: Object,
                required: true
            },
            id: Number
        }, 
        mounted(){
            var tagsarr = []
            this.thread.tags.forEach(e=>{
                tagsarr.push({tag:e})
            })
            $('.chips').material_chip({
                data: tagsarr
            });
        },
        components:{
            flame
        }
    }

</script>

<style>
    .gray {
        background-color: lightgray!important;
    }
</style>