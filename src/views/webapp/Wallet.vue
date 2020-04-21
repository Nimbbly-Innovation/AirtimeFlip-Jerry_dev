<template>
  <div class="wallet">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Wallet</v-toolbar-title>
            </v-toolbar>
            <v-tabs color="orange">
              <v-tab>
                Fund with card
              </v-tab>
              <v-tab>
                Fund with bank
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-form @submit.prevent="fund">
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            v-model="amount"
                            label="Amount"
                            type="number"
                            outlined
                            :rules="[rules.required, rules.min]"
                            hint="Enter amount you want to fund"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-btn 
                            :disabled="!formIsValid"
                            type="submit"
                            class="white--text"
                            color="orange"
                            :loading="loading"
                            >
                            Proceed
                            </v-btn>
                          <br> <br>
                          <span>1.5% will be charged for this transaction</span>
                          <br><br>
                          <v-btn text small color="orange" to="/webapp/convert">Fund with airtime instead</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-form>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Bank Name"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Account Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Amount"
                            outlined
                            hint="Enter the amount you want to transfer"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col col="12">
                          <v-btn class="white--text" color="orange" @click.stop="dialog = true">Proceed</v-btn>
                          <br> <br>
                          <p>&#x20A6; 50 charge on every withdrawal</p>
                          
                          <v-btn text small color="orange" to="/webapp/convert">Fund with airtime instead</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
        <v-col md="4" lg="4">
          <v-card class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content class="text-right">
                <v-list-item-title class="headline mb-1">&#x20A6; {{ user.wallet }}</v-list-item-title>
                <v-list-item-subtitle class="orange--text">Available Balance</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <br>

          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Recent Transactions</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <h3>Bank Transfer</h3>
                  <span>#00947845</span>
                </v-col>
                <v-col class="text-right" cols="6">
                  <h4 class="green--text">&#x20A6; 10,000.00</h4>
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
    </v-container>
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Your Wallet is ready to be funded</v-card-title>
            <v-card-text>
              <p>Current balance: {{ user.wallet }}</p>
              <p>Amount to be added: <span>{{ amount }}</span></p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
              <v-btn color="green darken-1" text :href="url">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <div class="spacing"></div>
  </div>
</template>

<script>
  export default {
    name: 'fund',
    data () {
      return {
        amount: '',
        loading: false,
        dialog: false,

        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 4 || 'Only transactions from 1000 and above',
        },
      }
    },

    methods: {
      fund() {
        this.loading = true
        this.$store.dispatch('fundUser', {
          amount: this.amount
        })
        .then(success => {
          this.loading = false
          this.dialog = true
        })
      }
    },
    
    computed: {
      user() {
        return this.$store.state.user;
      },

      banks() {
        return this.$store.state.banks;
      },

      url() {
        return this.$store.state.url;
      },

      formIsValid () {
        return (
          this.amount
        )
      },
    },
  }
</script>


<style scoped>

@media only screen and (max-width: 959px) {

  .spacing {
    height: 10vh;
  }

  .v-application--is-ltr .v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tab:first-child, .v-application--is-ltr .v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
    margin-left: 0;
  }

}

.v-card {
  border-radius: 10px;
}
</style>