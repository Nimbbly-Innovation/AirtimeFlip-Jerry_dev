<template>
  <div class="signup">
    <v-toolbar flat>
      <v-toolbar-title>
        <router-link to="/"><img src="../assets/img/airtimefllip-w.png" alt="airtimeflip-logo"></router-link>
      </v-toolbar-title>
    </v-toolbar>

    <div class="signup_form">
      <v-container fluid>
        <v-row>
          <v-col class="forms" cols="12" md="6" lg="6">
            <h2>Signup</h2>
            <span class="subheading">Enter your details below</span>

            <v-form class="form_field" @submit.prevent="signup">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="fullname"
                      :rules="[rules.required]"
                      label="Full Name"
                      outlined
                      type="name"
                      append-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      outlined
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      label="Email"
                      type="email"
                      append-icon="mdi-email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="username"
                      :rules="[rules.required]"
                      label="Username"
                      outlined
                      type="name"
                      append-icon="mdi-account"
                      height="10"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field 
                      v-model="number"
                      label="Mobile Number"
                      :rules="[rules.required]"
                      type="number"
                      outlined
                      append-icon="mdi-phone"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="password"
                      outlined
                      append-icon="mdi-lock"
                      :rules="[rules.required, rules.min]"
                      type="password"
                      name="password"
                      label="Password"
                      hint="At least 8 characters"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      v-model="password_confirmation"
                      outlined
                      append-icon="mdi-lock"
                      :rules="[rules.required, rules.min]"
                      type="password"
                      name="password_confirmation"
                      label="Confirm Password"
                      hint="At least 8 characters"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="terms"
                      :rules="[v => !!v || 'You must agree to continue!']"
                      color="orange"
                    >
                      <template v-slot:label>
                        <div @click.stop="">
                          by signing up you agree to our
                          <a href="javascript:;" @click.stop="term = true">terms</a>
                          and
                          <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
                        </div>
                      </template>
                    </v-checkbox>
                  </v-col>
                  <v-card-actions>
                    <v-row>
                      <v-col cols="12">
                        <v-btn
                          type="submit"
                          color="orange"
                          class="white--text"
                          :loading="loading"
                        >
                        Signup
                        </v-btn>
                      </v-col>
                      <br> <br>
                      <v-col cols="12">
                        <span class="signin_link body-2">Already have an account <router-link to="/Signin">Login</router-link> instead</span>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-row>
              </v-container>
            </v-form>
            <v-dialog width="70%">
              <v-card>
                <v-card-title class="title">Terms</v-card-title>
                <v-card-text v-for="n in 5" :key="n">
                  {{ content }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="orange"
                    @click="term = false"
                  >Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="conditions" width="70%">
              <v-card>
                <v-card-title class="title">Conditions</v-card-title>
                <v-card-text v-for="n in 5" :key="n">
                  {{ content }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="orange"
                    @click="conditions = false"
                  >Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <img class="d-none d-sm-flex mx-auto" width="80%" src="../assets/svg/start_building.svg" alt="">
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
    name: 'signup',
    data () {
      return {
        fullname: '',
        email: '',
        username: '',
        number: '',
        password: '',
        password_confirmation: '',
        loading: false,

        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        
        conditions: false,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
        terms: false,
        error: false
      }
    },
    methods: {
      signup() {
        this.loading = true
        this.$store.dispatch('registerUser', {
          fullname: this.fullname,
          email: this.email,
          username: this.username,
          number: this.number,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(success => {
          this.loading = false
          this.$router.push('/Mail')
        })
      }
    }

  }
</script>

<style scoped>
.signup {
  margin-bottom: 100px;
}
.v-text-field__slot {
  height: 20px !important;
}

.v-application a {
  text-decoration: none;
  color: orange;
}

.signup_form {
  padding: 10vh 5vw;
}

</style>