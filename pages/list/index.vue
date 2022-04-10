<template>
    <div class="wrapper">
        List
    </div>
</template>

<script>
export default {
    middleware: 'anonymous',
    mounted() {
        console.log(this.$fire.auth.currentUser)
    }
}
</script>