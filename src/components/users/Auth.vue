<template>
    <div class="login-container">
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