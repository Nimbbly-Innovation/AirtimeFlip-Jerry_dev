<template>
  <div class="airtime">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Purchase Airtime</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <p>Select Network Topup</p>
              <v-tabs>
                <v-tab>Airtel VTU</v-tab>
                <v-tab>Etisalat VTU</v-tab>
                <v-tab>GLO VTU</v-tab>
                <v-tab>MTN VTU</v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-form @submit.prevent="airtel_vtu">
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="phone_number_airtel"
                              label="Phone Number"
                              outlined
                              :rules="[rules.required, rules.min]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" lg="6"></v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="amount_airtel"
                              label="Amount"
                              outlined
                              :rules="[rules.required]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <br />
                        <v-row>
                          <v-col cols="12">
                            <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-form>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-form @submit.prevent="etisalat_vtu">
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="phone_number_etisalat"
                              label="Phone Number"
                              outlined
                              :rules="[rules.required, rules.min]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" lg="6"></v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="amount_etisalat"
                              label="Amount"
                              outlined
                              :rules="[rules.required]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <br />
                        <v-row>
                          <v-col cols="12">
                            <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-form>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-form @submit.prevent="glo_vtu">
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="phone_number_glo"
                              label="Phone Number"
                              outlined
                              :rules="[rules.required, rules.min]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" lg="6"></v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="amount_glo"
                              label="Amount"
                              outlined
                              :rules="[rules.required]"
                              type="number"
                              
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <br />
                        <v-row>
                          <v-col cols="12">
                            <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-form>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-form @submit.prevent="mtn_vtu">
                      <v-card-text>
                        <v-row>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="phone_number_mtn"
                              label="Phone Number"
                              outlined
                              :rules="[rules.required, rules.min]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="billing_method"
                              label="Billing Method"
                              outlined
                              :rules="[rules.required]"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field
                              v-model="amount_mtn"
                              label="Amount"
                              outlined
                              :rules="[rules.required]"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <br />
                        <v-row>
                          <v-col cols="12">
                            <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-form>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4" lg="4">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Recent Transactions</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <h3>MTN Nigeria</h3>
                  <span>#00947845</span>
                </v-col>
                <v-col class="text-right" cols="6">
                  <h4 class="green--text">N 1,000.00</h4>
                  <span>Nov 06</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card flat class="text-center">
              <v-btn color="orange" route to="/webapp/history" text>View more</v-btn>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">
            <v-icon>mdi-tablet-android</v-icon>
          </v-card-title>

          <v-card-text>
            <h4 class="green--text">N 10,000</h4>
            <p class="caption">MTN Service</p>
            <v-text-field label="pin" hint="Enter your transaction pin" persistent-hint outlined></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" class="white--text" @click="submit">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <div class="spacing"></div>
  </div>
</template>

<script>
export default {
  name: "airtel_vtu",
  name: "etisalat_vtu",
  name: "glo_vtu",
  name: "mtn_vtu",
  data() {
    return {
      phone_number_mtn: "",
      phone_number_glo: "",
      phone_number_airtel: "",
      phone_number_etisalat: "",
      phone_number: "",
      billing_method: "",
      amount_etisalat: "",
      amount_airtel: "",
      amount_glo: "",
      amount_mtn: "",
      amount: "",
      dialog: false,

      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 11 || "Please enter an 11 digit number"
      }
    };
  },

  methods: {
    airtel_vtu() {
      this.$store
        .dispatch("airtelAirtime", {
          phone_number_airtel: this.phone_number_airtel,
          amount_airtel: this.amount_airtel,
          amount: this.amount
        })
        .then(success => {});
    },
    etisalat_vtu() {
      this.$store
        .dispatch("etisalatAirtime", {
          phone_number_etisalat: this.phone_number_etisalat,
          phone_number: this.phone_number,
          amount_etisalat: this.amount_etisalat,
          amount: this.amount
        })
        .then(success => {});
    },
    glo_vtu() {
      this.$store
        .dispatch("gloAirtime", {
          phone_number_glo: this.phone_number_glo,
          phone_number: this.phone_number,
          amount_glo: this.amount_glo,
          amount: this.amount
        })
        .then(success => {});
    },
    mtn_vtu() {
      this.$store
        .dispatch("mtnAirtime", {
          phone_number_mtn: this.phone_number_mtn,
          phone_number: this.phone_number,
          billing_method: this.billing_method,
          amount_mtn: this.amount_mtn,
          amount: this.amount
        })
        .then(success => {});
    }
  },

  computed: {
    formIsValid() {
      return (
        this.phone_number_mtn,
        this.phone_number_glo,
        this.phone_number_etisalat,
        this.phone_number_airtel,
        this.phone_number && this.amount_airtel,
        this.amount_etisalat,
        this.amount_glo,
        this.amount_mtn,
        this.amount
      );
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 959px) {
  .spacing {
    height: 10vh;
  }
}

/* Extras */

a:visited {
  color: #888;
}

a {
  color: #444;
  text-decoration: none;
}

p {
  margin-bottom: 1em;
}
.v-card {
  border-radius: 10px;
}
</style>