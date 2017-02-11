<template>
    <div class="login-container">
        <form @submit.prevent="login">
            <input type="text" v-model="email" />
            <input type="text" v-model="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "login",
        methods: {
           login(){
                axios.post("api/login", {
                    email: this.email,
                    password: this.password
                }).then(res=>{
                    console.log(res)
                    document.cookie = "userId="+res.data.data._id+"; expires=Thu, 18 Dec 2017 12:00:00 UTC";
                }).catch(err =>{
                    console.log(err)
                })

           }
        },
        data() {
            return {
                email: "",
                password: ""
            }
        }
    }

</script>