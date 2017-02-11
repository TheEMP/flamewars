<template>
    <div :if="canEdit" class="edit-container">
        <div class="row">
            <div class="col s6 offset-s3">
                <a @click="toggle" class="waves-effect waves-light red btn"><i class="material-icons left">mode_edit</i>Edit</a>

                <form @submit.prevent="save" v-if="active">
                    <textarea class="materialize-textarea" rows="8" cols="100" v-model="msgText"></textarea>
                    <button class="waves-effect waves-light waves-red red btn" type="submit"><i class="material-icons">&#xE86C;</i>Comfirm Edit</button>
                </form>
                <VueMarkdown v-if="active" :source="msgText">
                </VueMarkdown>
            </div>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import cookies from "../../assets/getCookies.js"
    import axios from "axios"
    export default {
        name: "edit",
        methods: {
            toggle() {
                this.active = !this.active
            },
            save() {
                //
                console.log("saving?")
                var path = this.comment.name && "threads" || "comments"
                console.log("api/"+path+"/"+this.comment._id)
                axios.put("api/"+path+"/"+this.comment._id, {
                    text: this.msgText
                }).then(rep=>{
                    console.log(rep)

                }).catch(err=>{
                    console.log(err)
                })
                if (this.comment.name){

                }
                
            }
        },
        mounted() {
            this.msgText = this.text
        },
        computed: {
            canEdit() {
                return this.comment.userId === cookies("userId")
            }
        },
        data() {
            return {
                msgText: this.text,
                active: false
            }
        },
        components: {
            VueMarkdown
        },
        props: {
            text: String,
            comment: Object
        },
    }

</script>