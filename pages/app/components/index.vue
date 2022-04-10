<template>
    <div class="wrapper">
        <user-card
            v-for="user of users.results"
            :key="user.index"
            :name="`${user.name.first} ${user.name.last}`"
            :position="user.email"
            :identificator="user.id.value"
            :avatar="user.picture.large"
        />
    </div>
</template>

<script>
export default {
    components: {
        userCard: () => import('~/components/users/userCard.vue'),
    },
    data: () => ({
        users: {
            results: []
        }
    }),
    async mounted() {
        this.users = await this.$axios.$get('https://randomuser.me/api/?results=3');
    }
}
</script>