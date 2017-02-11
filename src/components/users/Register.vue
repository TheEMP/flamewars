<template>
    <div class="login-container">
        <form id="registerModal" class="modal" @submit.prevent="register">
            <div class="modal-content">
                <div class="input-field">
                    <input required="true" id="registername" type="text" v-model="name" />
                    <label for="registername">Username</label>
                </div>
                <div class="input-field">
                    <input required="true" id="registeremail"type="email" v-model="email" />
                    <label for="registername">Email</label>
                </div>
                <div class="input-field">
                    <input required="true" id="registerpassword" type="password" v-model="password" />
                    <label for="registerpassword">Password</label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" name="action" class="modal-action waves-effect waves-green btn">Register</button>
                <div class="left">
                    <router-link v-if="" class="modal-close left-align waves-effect waves-light btn btn-flat" :to='{name: "auth.login"}'>Login</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios"
    import Vue from 'vue'
    export default {
        name: "register",
        methods: {
            register() {
                $('#registerModal').modal('close');
                axios.post("api/register", {
                    email: this.email,
                    name: this.name,
                    password: this.password
                }).then(res => {
                    console.log(res)
                    if (res.data.message === "Successfully created user account") {
                        document.cookie = "userId=" + res.data.data._id + "; expires=Thu, 18 Dec 2017 12:00:00 UTC";
                        Materialize.toast('User Account Created Successfully!', 4000)
                    }
                    
                }).catch(err => {
                    console.log(err)
                })

            }
        },
        mounted() {
            $('.modal').modal();
            $('#registerModal').modal('open');
        },
        data() {
            return {
                name: "",
                email: "",
                password: ""
            }
        }
    }
    Vue.nextTick(() => {
        $('.modal').modal();
        $('#registerModal').modal('open');
    })

</script>