<template>
    <div class="login-container">
        <router-link v-if="" class="waves-effect waves-light btn" :to='{name: "auth.login"}'>Login</router-link>
        <router-link v-if="" class="waves-effect waves-light btn" :to='{name: "auth.register"}'>Register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import Login from "./Login"
    import Register from "./Register"
    export default {
        name: "auth",
        components:{
            Login,
            Register
        }
    }

</script>