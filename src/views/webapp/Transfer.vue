<template>
  <div class="transfer">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-card class="title_box" flat>
              <div class="title_box">
                <v-toolbar-title>Funds Transfer</v-toolbar-title>
                <span class="caption">Transfer funds to friends and family on airtime flip.</span>
              </div>
              <v-form @submit.prevent="transfer">
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        v-model="receiver"
                        label="Username"
                        outlined
                        hint="Enter username you want to transfer to"
                      ></v-text-field>
                    </v-col>
                    <v-col md="6" lg="6"></v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        v-model="amount"
                        label="Amount"
                        outlined
                        hint="Enter the amount you want to transfer"
                      ></v-text-field>
                    </v-col>
                    <v-col md="6" lg="6"></v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn class="white--text" color="orange" @click.stop="dialog = true">Proceed</v-btn>
                    </v-col>
                  </v-row>
                  <v-dialog
                    v-model="dialog"
                    max-width="290"
                  >
                    <v-card>
                      <v-card-title class="headline">
                        <v-avatar style="width:40px; height:40px;">
                          <img
                              class="manager_img"
                              src="https://cdn.vuetifyjs.com/images/john.jpg"
                              alt="John"
                              style="border-radius: 5px; margin-left: auto;"
                          >
                        </v-avatar>
                      </v-card-title>

                      <v-card-text>
                        <h4 class="green--text">N 10,000</h4>
                        <span class="caption">Joy Grace</span>
                        <p class="caption">send funds</p>
                        <v-text-field
                        v-model="pin"
                        label="pin"
                        hint="Enter your transaction pin"
                        persistent-hint
                        outlined
                      ></v-text-field>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn
                          color="orange"
                          class="white--text"
                          @click="submit"
                        >
                          Send
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-card-text>
              </v-form>
            </v-card>
          </v-card>
        </v-col>
        <v-col md="4" lg="4">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Recent Transactions</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-avatar style="width:40px; height:40px;">
                    <img
                        class="manager_img"
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                        style="border-radius: 5px; margin-left: auto;"
                    >
                  </v-avatar>
                </v-col>
                <v-col cols="6">
                  <h3>Bank Transfer</h3>
                  <span>#00947845</span>
                </v-col>
                <v-col class="text-right" cols="4">
                  <h4 class="green--text">N 10,000.00</h4>
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
    <div class="spacing"></div>
  </div>
</template>

<script>
  export default {
    name: 'transfer',

    data () {
      return {
        dialog: false,
      }
    },

    methods: {
      transfer() {
        this.loading = true
        this.$store.dispatch('sendTransfer', {
          receiver: this.receiver,
          amount: this.amount,
          pin: this.pin,
        })
        .then(response => {
          this.loading = false
        })
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

.title_box {
  padding: 10px 18px;
}
</style>