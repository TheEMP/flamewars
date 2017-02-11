<template>
    <nav class="nav-extended">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link class="tab" active-class="active" tag="li" :to="{name:'profile.comments'}"><a>Login</a></router-link>
            </ul>
            <ul class="side-nav" id="mobile-demo">
                <router-link class="tab" active-class="active" tag="li" :to="{name:'profile.comments'}"><a>Comments</a></router-link>
            </ul>
        </div>
        <div class="nav-content">
            <ul class="tabs tabs-transparent">
  <router-link class = "tab" active-class= "active" tag = "li" :to = "{name:'threads'}"><a>Home</a></router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navBar",
        props: {
            thread: {
                type: Object,
                required: true
            }
        }
    }
</script>