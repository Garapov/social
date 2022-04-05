<template>
    <v-card
    class="user__card"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ position }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="80"
        color="grey"
      >
        <img :src="avatar" alt="">
      </v-list-item-avatar>
    </v-list-item>
    <div class="d-flex align-center justify-space-between">
        <v-card-actions>
            <v-btn
                outlined
                rounded
                text
                :to="{ name: 'users-id', params: { id: identificator } }"
            >
                Open Profile
            </v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn
              icon
              color="pink"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
    props: {
        position: {
            type: String,
            default: 'Position'
        },
        name: {
            type: String,
            default: 'John Doe'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, vitae.'
        },
        identificator: {
            type: String,
            default: 'john_doe'
        },
        avatar: {
            type: String,
            default: 'https://randomuser.me/api/portraits/men/68.jpg'
        }
    },
    data: () => ({
        isMounted: false,
    }),
    mounted() {
        this.isMounted = false;
    }
}
</script>

<style lang="scss" scoped>
    .user {
        &__card {
            &:not(:last-child) {
                margin-bottom: 10px
            }
        }
    }
</style>