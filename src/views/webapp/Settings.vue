<template>
  <div class="settings">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Settings</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="profile">
                <v-avatar style="width: 100px; height: 100px; margin-bottom: 10px;">
                  <img
                    src=""
                    alt=""
                  >
                </v-avatar>
                <v-btn class="mx-2 add_btn" fab small color="white" @click.stop="profile = true">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </div>
              <h3>{{ user.fullname }}</h3>
              <span>{{ user.email }}</span>
            </v-card-text>
            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Profile</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Name</v-list-item-subtitle>
                              <v-list-item-title>{{ user.fullname }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Number Number</v-list-item-subtitle>
                              <v-list-item-title>{{ user.number }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Date of Birth</v-list-item-subtitle>
                              <v-list-item-title>24 Nov 2019</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Email</v-list-item-subtitle>
                              <v-list-item-title>{{ user.email }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Bank Account</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card flat>
                      <v-list-item>
                        <v-list-item-content>
                          <v-row>
                            <v-col class="pt-5" cols="8" md="2" lg="2">
                              <h3>First Bank Nigeria</h3>
                              <span class="caption" style="color: gray; font-weight: bold;">04 - 02 - 2020</span>
                            </v-col>
                            <v-col cols="4" md="10" lg="10">
                              <v-dialog v-model="dialog" persistent max-width="290">
                                <template class="text-right" v-slot:activator="{ on }">
                                  <v-btn icon v-on="on"><v-icon color="gray">mdi-delete</v-icon></v-btn>
                                </template>
                                <v-card>
                                  <v-card-title class="headline">Use Google's location service?</v-card-title>
                                  <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                                    <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="orange" class="white--text" @click.stop="addact = true">Add New Bank Account</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Notification</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" md="6" lg="6">
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Transactions</v-list-item-title>
                            <p class="caption">withdrawal and transfer</p>
                          </v-col>
                          <v-col cols="4">
                            <v-switch color="orange" flat v-model="switch1"></v-switch>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Topups</v-list-item-title>
                            <p class="caption">Airtime and data</p>
                          </v-col>
                          <v-col cols="4">
                            <v-switch color="orange" flat v-model="switch2"></v-switch>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Newsletter</v-list-item-title>
                            <p class="caption">Promotions and other information</p>
                          </v-col>
                          <v-col cols="4">
                            <v-switch color="orange" flat v-model="switch3"></v-switch>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Push Notification</v-list-item-title>
                            <p class="caption">Get information on new update and Promotions</p>
                          </v-col>
                          <v-col cols="4">
                            <v-switch color="orange" flat v-model="switch2"></v-switch>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Security</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" md="6" lg="6">
                        <v-row>
                          <v-col cols="12" md="8" lg="8">
                            <v-list-item-title>Setup PIN</v-list-item-title>
                              <p class="caption">This 4 digit pin is used to authorize all transactions</p>
                          </v-col>
                          <v-col cols="12" md="4" lg="4">
                            <v-btn class="white--text" color="orange"  @click.stop="setuppin = true">Setup</v-btn>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="8" lg="8">
                            <v-list-item-title>Reset PIN</v-list-item-title>
                              <p class="caption">Forget your 4 digit pin? You can reset it now!</p>
                          </v-col>
                          <v-col cols="12" md="4" lg="4">
                            <v-btn class="white--text" color="orange"  @click.stop="resetpin = true">Reset</v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="6" lg="6">
                        <v-row>
                          <v-col cols="12" md="8" lg="8">
                            <v-list-item-title>Reset Password</v-list-item-title>
                            <p class="caption">To sign in, your password is required</p>
                          </v-col>
                          <v-col cols="12" md="4" lg="4">
                            <v-btn class="white--text" color="orange"  @click.stop="resetpwd = true">Reset</v-btn>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="8" lg="8">
                            <v-list-item-title>Delete Account</v-list-item-title>
                            <p class="caption">We do our best to give you a great experience we’ll be sad to see you leave us</p>
                          </v-col>
                          <v-col cols="12" md="4" lg="4">
                            <v-btn class="white--text" color="orange"  @click.stop="deleteact = true">Delete</v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Verification</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col md="6" lg="6">
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Email Verification</v-list-item-title>
                            <p class="caption">Add basic account security</p>
                          </v-col>
                          <v-col cols="4">
                            <v-checkbox color="success" readonly v-model="user.verified"></v-checkbox>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Add Bank Account</v-list-item-title>
                            <p class="caption">Add primary bank account</p>
                          </v-col>
                          <v-col cols="4">
                            <v-checkbox color="success" readonly v-model="checkbox2"></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title>Add BVN Number</v-list-item-title>
                            <p class="caption">Link BVN to your account</p>
                          </v-col>
                          <v-col cols="4">
                            <v-checkbox color="success" readonly v-model="checkbox3"></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        v-model="profile"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">Edit Profile</v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="7" lg="7">
                <v-file-input
                  label="Upload Photo"
                  outlined
                  dense
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-text-field
                  label="Fullname"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-text-field
                  label="Username"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="7" lg="7">
                <v-text-field
                  label="Number"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5" lg="5">
                <v-text-field
                  label="Date of Birth"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="8" lg="8">
                <v-text-field
                  label="Email"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>

            <v-btn
              color="orange"
              class="white--text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="addact"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Add Your Account</v-card-title>
          
          <v-form @submit.prevent="account">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <select class="bank_content" v-model="bank_id">
                    <option value="" disabled selected>Select Bank Name</option>
                    <option v-for="banks in banks" v-bind:key="banks.id" v-bind:value="banks.id">
                      {{ banks.bank_name }}
                    </option>
                  </select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="account_name"
                    label="Account Name"
                    outlined
                    dense
                    hint="Enter your account name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="account_number"
                    label="Account Number"
                    outlined
                    dense
                    hint="Enter your account number"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn
                type="submit"
                color="orange"
                class="white--text"
                :loading="loading"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="setuppin"
        max-width="290"
        persistent
      >
        <v-card>
          <v-card-title class="headline">Setup PIN</v-card-title>

          <v-form @submit.prevent="transferpin">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    outlined
                    v-model="pin"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="pin"
                    label="Enter PIN"
                    hint="Input 4 characters only"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn color="green darken-1" text @click="setuppin = false">Disagree</v-btn>
              <v-btn type="submit" color="green darken-1" :loading="loading" text>Save</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="resetpin"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Rest PIN</v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Enter PIN"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Enter New PIN"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Re-enter PIN"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              class="white--text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="resetpwd"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Reset Password</v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Enter Password"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Re-enter New Password"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              class="white--text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="deleteact"
        max-width="400"
      >
        <v-card>
          <v-card-title class="headline"></v-card-title>

          <v-card-text class="text-center">
            <p class="title">Do you want delete your account</p>
          </v-card-text>

          <v-card-actions class="justify-space-around">
            <v-btn
              color="orange"
              text
              @click="dialog = false"
            >
              No
            </v-btn>
            <v-btn
              color="orange"
              text
              @click="dialog = false"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
    <div class="spacing"></div>
  </div>
</template>

<script>
  export default {
    name: 'transferpin',
    name: 'account',

    data () {
      return {
        dialog: false,
        switch1: true,
        switch2: false,
        switch3: true,
        switch4: false,
        checkbox2: false,
        checkbox3: false,
        profile: false,
        addact: false,
        setuppin: false,
        resetpin: false,
        resetpwd: false,
        deleteact: false,
        loading: false,
        pin: '',
        bank_id: '',
        account_name: '',
        account_number: '',

        show1: false,
      }
    },

    methods: {
      transferpin() {
        this.loading = true
        this.$store.dispatch('addPin', {
          pin: this.pin
        })
        .then(response => {
          this.loading = false
        })
      },

      account() {
        this.loading = true
        this.$store.dispatch('createAccount', {
          bank_id: this.bank_id,
          account_name: this.account_name,
          account_number: this.account_number,
        })
        .then(response => {
          this.loading = false
        })
        .catch(error => {
          this.loading = false
        })
      }
    },
    
    computed: {
      user() {
        return this.$store.state.user;
      },

      banks() {
        return this.$store.state.banks;
      }
    },
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {

  .spacing {
    height: 10vh;
  }

}

.profile {
  position: relative;
}

.add_btn {
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translate(25%, 25%)
}

.bank_content {
  height: 55px;
  margin-bottom: 25px;
  width: 100%;
  border: solid 1px rgba(149, 145, 140, .5);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
}

</style>