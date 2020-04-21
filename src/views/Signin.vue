<template>
  <div class="signin">
    <v-toolbar flat>
      <v-toolbar-title>
        <router-link to="/"><img src="../assets/img/airtimefllip-w.png" alt="airtimeflip-logo"></router-link>
      </v-toolbar-title>
    </v-toolbar>

    <div class="login_form">
      <v-container fluid>
        <v-row>
          <v-col class="" cols="12" md="4" lg="4">
            <h2>Sign in</h2>
            <span>Enter your details below</span>

            <v-form @submit.prevent="login">
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      height="2"
                      outlined
                      v-model="identity"
                      :rules="[rules.required]"
                      label="Username"
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-row>
                      <v-col cols="12" md="6" lg="6">
                        <v-btn
                        type="submit"
                        color="orange"
                        class="mr-4 white--text"
                        :loading="loading"
                        >
                          Login
                        </v-btn>
                      </v-col>
                      <v-col cols="12" md="6" lg="6"><span class="body-2">Forgot my password</span></v-col>
                      <v-col cols="12"><span class="body-2">Don't have an account, <router-link class="orange--text" to="/Signup">Signup</router-link> here</span></v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            
          </v-col>
          <v-col cols="12" md="8" lg="8">
            <img class="d-none d-sm-flex mx-auto" width="60%" src="../assets/svg/coolness.svg" alt="">
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-footer
      padless
      absolute
    >
      <v-card
        flat
        tile
        class="text-center"
        width="100%"
      >

        <v-card-text>
          <span>Copyright airtimeflip &#169;</span> {{ new Date().getFullYear() }} — <span>All rights reserved</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        identity: '',
        password: '',
        loading: false,

        show1: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 4 || 'Min 4 characters',
        },
      }
    },

    methods: {
      login() {
        this.loading = true
        this.$store.dispatch('retrieveToken', {
          identity: this.identity,
          password: this.password,
        })
        .then(response => {
          this.loading = false
          this.$router.push('/Webapp')
        })
      }
    }
  };
</script>

<style lang="scss">

.login_form {
  padding: 10vh 5vw;
}

.v-application a {
  text-decoration: none;
  color: orange;
}

.v-progress-circular {
  margin-left: 10px;
}

</style>