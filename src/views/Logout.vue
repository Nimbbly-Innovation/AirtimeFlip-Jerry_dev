<template>

</template>

<script>
    export default {
        created() {
            this.$store.dispatch('clearUser')
            this.$store.dispatch('destroyToken')
            this.$store.dispatch('clearDetails')
            this.$router.push('/signin')
        }
    }
</script>

