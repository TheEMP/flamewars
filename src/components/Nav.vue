<template>
    <nav class="nav-extended">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right" @click="openModal" v-if="!loggedIn">
                <router-link class="tab" active-class="active" tag="li" :to="{name:'auth.login'}"><a>Login</a></router-link>
            </ul>
            <ul class="right" v-if="loggedIn">
                <router-link class="tab" active-class="active" tag="li" :to="{name:$route.params.name}" @click="logOut"><a>Log Out</a></router-link>
            </ul>
            <ul class="side-nav" id="mobile-demo">
                <router-link class="tab" active-class="active" tag="li" :to="{name:'profile.comments'}"><a>Comments</a></router-link>
            </ul>
        </div>
        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <router-link class="tab" active-class="active" tag="li" :to="{name:'threads'}"><a>Home</a></router-link>
                <router-link class="tab" active-class="active" tag="li" :to="{name:'create-thread'}"><a>New Thread</a></router-link>
                <router-link class="tab" active-class="active" tag="li" :to="{name:'profile'}"><a>My Profile</a></router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    import cookies from '../assets/getCookies.js'

    export default {
        name: "navBar",
        methods: {
            openModal() {
                $('.modal').modal();
                $('#loginModal').modal('open');
            },
            logOut(){
                axios.delete("/api/logout")
                .then(function(){
                    delete document.cookie.userId
                })
            }
        },
        computed: {
            loggedIn(){
                return !!cookies.userId

            }
        }
    }

</script>