<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-btn
          v-for="link in links"
          :key="link.index"
          text
          :to="{ name: link.url }"
        >
          {{ link.text }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <nuxt-child />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {
          text: "Main Page",
          url: 'index'
        },
        {
          text: "Dashboard",
          url: 'app-index'
        }
      ],
    }),
  }
</script>