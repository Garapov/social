<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.index"
          :to="{name: link.link}"
        >
          {{ link.text }}
        </v-tab>
      </v-tabs>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-avatar
            class="hidden-sm-and-down"
            color="grey darken-1 shrink"
            size="32"
            v-bind="attrs"
            v-on="on"
          ></v-avatar>
        </template>

        <v-list>
          <v-list-item v-if="getUser" :to="{name: 'users-id', params: {id: getUser.uid}}">
            <v-list-item-title>{{ getUser.email }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="logout"
          >
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <v-list
                nav
                dense
              >
                <v-list-item-group
                  v-model="menu.selectedItem"
                  color="primary"
                >
                  <v-list-item
                    v-for="(link, i) in menu.items"
                    :key="i"
                    :to="{ name: link.link }"
                    exact
                  >
                    <v-list-item-icon>
                      <v-icon v-text="link.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title v-text="link.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="7"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <nuxt />
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    middleware: ['auth'],
    data: () => ({
      links: [
        {
          text: 'Main',
          link: 'app-index'
        },
        {
          text: 'Statistic',
          link: 'app-stats'
        },
        {
          text: 'Components',
          link: 'app-components'
        }
        ,
        {
          text: 'List',
          link: 'app-list'
        }
      ],
      menu: {
        selectedItem: 0,
        items: [
          { text: 'Main', icon: 'mdi-home', link: 'app-index' },
          { text: 'Filter', icon: 'mdi-account-multiple', link: 'app-filter' },
        ],
      }
    }),
    computed: {
      ...mapGetters([
        "getUser",
      ])
    },
    mounted() {
      console.log(this.getUser);
    },
    methods: {
      async logout() {
        await this.$fire.auth.signOut();
      }
    }
  }
</script>