<template>
  <v-container :class="{'auth__wrapper': authWrapper}">
    <v-card max-width="600" outlined :loading="isLoading" :disabled="isLoading">
      <v-img class="white--text align-end" height="200px" width="100%" :src="formImage" background-color="primary">
        <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
        <v-card-actions>
          <v-btn color="white" text @click="setAuthType('login')">
            Login
          </v-btn>
          <v-btn color="white" text @click="setAuthType('register')">
            Register
          </v-btn>
        </v-card-actions>
      </v-img>
      <v-card-text>
        <v-form v-if="authType === 'login'">
          <v-text-field v-model="email" label="Email *" type="email" required outlined shaped></v-text-field>
          <v-text-field v-model="password" label="Password *" type="password" required outlined shaped></v-text-field>
          <div class="d-flex align-center justify-space-between">
            <v-btn outlined primary :loading="isLoading" @click="login">
              Login
            </v-btn>
            <v-btn text color="blue">
              I forgot my password
            </v-btn>
          </div>
        </v-form>
        <v-form v-if="authType === 'register'">
          <v-text-field v-model="email" label="Email *" type="email" required outlined shaped></v-text-field>
          <v-text-field v-model="password" label="Password *" type="password" required outlined shaped></v-text-field>
          <v-text-field v-model="passwordRepeat" label="Password repeat" type="password" required outlined shaped>
          </v-text-field>
          <div class="d-flex align-center justify-space-between">
            <v-btn outlined primary :loading="isLoading" @click="register">
              Register
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  // TODO form needs to be validated
  export default {
    layout: 'auth',
    data: () => ({
      authWrapper: true,
      authType: 'login',
      isLoading: false,
      email: "",
      password: "",
      passwordRepeat: ""
    }),
    computed: {
      formImage() {
        return this.authType === 'login' ? 'https://picsum.photos/600/200' : 'https://picsum.photos/600/201'
      }
    },
    methods: {
      setAuthType(authType) {
        if (authType === this.authType) return;
        this.authType = authType;
      },
      async login() {
        this.isLoading = true;
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.push({
            name: 'app-index'
          });
          this.$toast.success(`Hello, ${user.user.email}`);
        }).catch((error) => {
          this.$toast.error(error.message);
        });
        this.isLoading = false;
      },
      async register() {
        this.isLoading = true;
        await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.push({
            name: 'app-index'
          });
          this.$toast.success(`Hello, ${user.user.email}`);
        }).catch((error) => {
          this.$toast.error(error.message);
        });
        this.isLoading = false;
      }
    }
  }

</script>

<style lang="scss" scoped>
  .auth {
    &__wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>
