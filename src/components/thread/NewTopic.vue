<template>
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <form @submit.prevent="post">
                <div class="row">
                    <div class="input-field">
                        <input id="inputtile1" type="text" v-model="title" />
                        <label for="inputtile1">Thread Title</label>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea" rows="8" cols="100" v-model="text"></textarea>
                            <label for="textarea1">Textarea</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="iconLable" type="text" v-model="icon" />
                            <label for="iconLable">Thread Icon</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6 offset-s3">
                            <div class="chips chips-placeholder"></div>
                        </div>
                    </div>


                    <blockquote>
                        <VueMarkdown class="left-align" :source="text">
                        </VueMarkdown>
                    </blockquote>
                    <button class="waves-effect waves-red red btn" type="submit">Post!</button>
                    <a id="iconshowcase" class="btn-floating disabled"><i class="material-icons">{{icon}}</i></a>
                    <label for="iconshowcase">Thread Title</label>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    import VueMarkdown from "vue-markdown"
    import axios from 'axios'
    import cookies from '../../assets/getCookies.js'
    import Router from '../../router'
    export default {
        name: "newtopic",
        methods: {
            post() {
                axios.post("api/threads", {
                    name: this.title,
                    text: this.text,
                    userId: cookies("userId"),
                    tags: this.tags, 
                    icon: this.icon
                }).then(res => {
                    Router.push({ name: 'thread-show', params: { id:res.data.data._id }})

                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        data() {
            return {
                text: "",
                title: "",
                tags: [],
                icon: "folder"
            }
        },
        components: {
            VueMarkdown
        },
        mounted(){
            $('.chips-placeholder').material_chip({
                placeholder: 'Enter a tag',
                secondaryPlaceholder: '+Tag',
            });
            $('.chips').on('chip.add', (e, chip)=>{
                this.tags.push(chip.tag)
            });

            $('.chips').on('chip.delete', (e, chip)=>{
                for (var i = 0; this.tags.length; i++) {
                    var tag = this.tags[i]
                    if (tag === chip.tag){
                        this.tags.splice(i, 1)
                    }
                }
            });

        }
    }

</script>