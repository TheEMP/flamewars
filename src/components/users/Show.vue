<template>
    <div class="showUser">
        <Profile :user="user"></Profile>

    </div>

</template>

<script>
    import Profile from './Profile'
    export default {
        name: 'showUser',
        data: function () {
            return {
                user: {}
            }
        },
        mounted: function () {
            let vm=this
            axios.get(`/api/users/${this.$route.params.id}`)
                .then(function (data) {
                    vm.user = data.data.data
                })
                .catch(console.error)
        },
        components: {
            Profile
        }
    }

</script>