<template>
    <div class="login-container">
        
        <form @submit.prevent="login" id="loginModal" class="modal">
            <div class="modal-content">
                <div class="input-field">
                    <input id="loginemail" type="text" v-model="email" />
                    <label for="loginemail">Email/Username</label>
                </div>

                <div class="input-field">
                    <input id="loginpassword" type="password" v-model="password" />
                    <label for="loginpassword">Password</label>
                </div>
            </div>

            <div class="modal-footer">

                <button type="submit" class="modal-action waves-effect waves-green btn">Login</button>
                <div class="left">
                    <router-link v-if="" class="modal-close left-align waves-effect waves-light btn btn-flat" :to='{name: "auth.register"}'>Register</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from "axios"
    export default {
        name: "login",
        methods: {
            login() {
                $('#loginModal').modal('close');
                axios.post("api/login", {
                    email: this.email,
                    password: this.password
                }).then(res => {
                    if (res.data.error) {
                        return 
                    }
                    console.log(res)
                    Materialize.toast('Login Successful!', 4000)
                    document.cookie = "userId=" + res.data.data._id + "; expires=Thu, 18 Dec 2017 12:00:00 UTC";
                }).catch(err => {
                    Materialize.toast('Bad Username/Password or user not found!', 4000)
                    console.log(err)
                })

            }
        },
        mounted() {
            $('.modal').modal();
            $('#loginModal').modal('open');
        },
        data() {
            return {
                email: "",
                password: ""
            }
        }
    }
    Vue.nextTick(() => {
        $('.modal').modal();
        $('#loginModal').modal('open');
    })

</script>