<template>
  <div class="dashboard">
    <div class="mob_overview">
      <div
        class="mx-auto complete_note d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
        flat
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-row>
              <v-col cols="8">
                <v-list-item-title class="display-1 font-weight-medium white--text mb-1"><span>&#x20A6;</span> {{ user.wallet }}</v-list-item-title>
                <v-list-item-subtitle>Available Balance</v-list-item-subtitle>
              </v-col>
              <v-col cols="4">
                <v-avatar style="width:40px; height:40px;">
                    <img
                        class="manager_img"
                        src=""
                        alt=""
                        style="border-radius: 5px; margin-left: auto;"
                    >
                </v-avatar>
              </v-col>
            </v-row>
            
                <v-row>
                  <v-col cols="4"
                  v-for="link in links"
                  :key="link.icon"
                  class="text-center"
                >
                  <v-btn
                    class="mx-2 quicky2"
                    icon
                    route :to="link.route"
                  >
                    <v-icon size="24px" color="orange">{{ link.icon }}</v-icon>
                  </v-btn>
                  <p class="body-2 white--text">{{ link.label }}</p>
                </v-col>
                </v-row>
          </v-list-item-content>
        </v-list-item>
      </div>
    </div>
    <v-container class="dashboard_mob" fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card
            class="mx-auto complete_note d-none d-sm-flex"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-row>
                  <v-col cols="12" md="8" lg="8">
                    <v-list-item-title class="title mb-1">Welcome {{ user.username }}</v-list-item-title>
                    <v-list-item-subtitle class="body-2">Lorem ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla, duis ultricies consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.</v-list-item-subtitle>
                  </v-col>
                  <v-col cols="12" md="4" lg="4">
                    <img class="complete_img d-none d-sm-flex" src="../../assets/svg/finish_line.svg" alt="">
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-row>
            <div class="mx-4 d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
              <h4>Overview</h4>
            </div>
            <v-col cols="12" md="4" lg="4" v-for="card in cards" :key="card.icon">
              <v-card
                :color="card.color"
              >
                <v-card-text class="white--text">
                  <v-row>
                    <v-col cols="4">
                      <v-btn
                        class="mx-2 overview"
                        icon
                      >
                        <v-icon :color="card.color" size="24px">{{ card.icon }}</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col class="text-right" cols="8">
                      <h3>{{ card.number }}</h3>
                      <span class="body-2">{{ card.label }}</span>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-card
            class="mx-auto complete_note d-none d-sm-flex"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="display-1 font-weight-medium mb-1"><span>&#x20A6;</span> {{ user.wallet }}</v-list-item-title>
                <v-list-item-subtitle>Available Balance</v-list-item-subtitle>
                  <v-card-actions>
                    <v-row>
                      <v-col cols="4"
                      v-for="link in links"
                      :key="link.icon"
                      class="text-center"
                    >
                      <v-btn
                        class="mx-2 quicky"
                        icon
                        route :to="link.route"
                      >
                        <v-icon size="24px" color="white">{{ link.icon }}</v-icon>
                      </v-btn>
                      <p class="body-2">{{ link.label }}</p>
                    </v-col>
                    </v-row>
                  </v-card-actions>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" lg="8">
          <v-row>
            <v-col cols="12" md="5" lg="5">
              <v-card class="security">
                <v-card-text>
                    <v-btn
                      class="mx-2 security_button"
                      icon
                    >
                      <v-icon class="overview_bar" color="white" size="24px">mdi-lock-outline</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-actions class="secritybtn">
                  <v-btn
                    color="white"
                    class="blue--text text-capitalize"
                    route to="/webapp/wallet"
                  >
                    Add Funds
                    <v-icon class="iconright">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="7" lg="7">
              <v-card class="flipbox d-none d-sm-flex">
                <v-row>
                  <v-col cols="6">
                    <img class="flipimg" src="../../assets/svg/i_can_fly.svg" alt="">
                  </v-col>
                  <v-col cols="6">
                    <h3 class="orange--text">Flip airtime to cash</h3>
                    <p class="body-2">A quick and easy way to convert your airtime to cash</p>
                    <v-btn
                      color="orange"
                      class="white--text text-capitalize"
                      route to="/webapp/convert"
                    >
                      Flip Now
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>

              <v-card class="pa-5 flipbox_mob d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
                <v-row>
                  <v-col cols="8">
                    <h3 class="orange--text">convert airtime to cash</h3>
                    <p class="body-2">A quick and easy way to convert your airtime to cash</p>
                  </v-col>
                  <v-col cols="4" class="text-right">
                    <v-btn
                      class="warning"
                      style="border-radius: 15px;"
                      icon
                      route to="/webapp/convert"
                    >
                      <v-icon color="white" size="30px">mdi-refresh</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="4" lg="4">
          <v-row>
            <v-col md="4" lg="4" v-for="payment in payments" :key="payment.image">
              <v-card class="text-center">
                <img style="margin: 40px 5px;" :src="payment.image" alt="">
                <p style="padding-bottom:5px;" class="body-2"><router-link class="black--text" :to="payment.route">{{ payment.label }}</router-link></p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="8" lg="8">
          <div class="trans_mob">
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title>Recent Transactions</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                  class="mx-2"
                  icon
                  route to="/webapp/history"
                >
                <v-icon size="15px">mdi-arrow-right</v-icon>
                </v-btn>
              </v-toolbar>
              <div class="pa-5">
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Date</th>
                        <th class="text-left">Time</th>
                        <th class="text-left"><v-icon color="orange" size="5px">mdi-checkbox-blank-circle</v-icon> Transaction</th>
                        <th class="text-left">Transaction ID</th>
                        <th class="text-left">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in table" :key="item.name">
                        <td>{{ item.date }}</td>
                        <td>{{ item.time }}</td>
                        <td>{{ item.transaction }}</td>
                        <td>{{ item.id }}</td>
                        <td>&#x20A6; {{ item.amount }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col class="comp_mob" cols="12" md="4" lg="4">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Complete Profile</v-toolbar-title>
            </v-toolbar>
            <v-card flat>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-2 orange--text">Confirm your email</v-list-item-title>
                  <v-list-item-subtitle class="caption">Add basic account security</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-checkbox color="success" readonly v-model="user.verified"></v-checkbox>
              </v-list-item>
            </v-card>
            <v-card flat>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-2 orange--text">Add bank account</v-list-item-title>
                  <v-list-item-subtitle class="caption">Add a primary account</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-checkbox color="success" readonly></v-checkbox>
              </v-list-item>
            </v-card>
            <v-card flat>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-2 orange--text">Add BVN number</v-list-item-title>
                  <v-list-item-subtitle class="caption">Link BVN to account</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-checkbox color="success" readonly></v-checkbox>
              </v-list-item>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="bg_w">
      <div class="px-4 py-5 bg_changes">
        <div>
          <h4 class="px-1">Recent Transactions</h4>
        </div>
        <v-card class="my-5" flat>
          <v-list-item v-for="item in table" :key="item.date">
            <v-list-item-content>
              <v-list-item-title class="body-2 orange--text">{{ item.transaction }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{ item.id }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content class="text-right">
              <v-list-item-title class="body-2 green--text">&#x20A6; {{ item.amount }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{ item.date }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        {icon: 'mdi-cash-multiple', number: '0', label: 'Completed Transactions', color: '#3FBBC2'},
        {icon: 'mdi-alarm', number: '0', label: 'Pending Transactions', color: '#AC8EDC'},
        {icon: 'mdi-close-circle-outline', number: '0', label: 'Declined Transactions', color: '#ED5A86'},
      ],

      links: [
        {icon: 'mdi-wallet-giftcard', label: 'Transfer', route: '/webapp/transfer'},
        {icon: 'mdi-wallet-membership', label: 'Withdrawal', route: '/webapp/withdrawal'},
        {icon: 'mdi-wallet-travel', label: 'Wallet', route: '/webapp/wallet'},
      ],

      payments: [
        {image: require('../../assets/svg/mtn_logo.svg'), label: 'Buy Airtime', route: '/webapp/airtime'},
        {image: require('../../assets/svg/dstv.svg'), label: 'Pay Bills', route: '/webapp/bills'},
        {image: require('../../assets/svg/9mobile.svg'), label: 'Buy Data', route: '/webapp/data'},
      ],

      table: [
          
        ],
    }),

    computed: {
      user() {
        return this.$store.state.user;
      }
    },
    
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {

  .dashboard {
    background-color: orange;
  }

  .dashboard_mob {
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .dashboard .bg_changes {
    background-color: #fdd985;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .bg_w {
    background-color: #fff;
  }

  .trans_mob, .comp_mob {
    display: none;
    visibility: hidden;
  }

}

@media only screen and (min-width: 960px) {
  .bg_w {
    display: none;
    visibility: hidden;
  }
}

.dashboard {
  padding: 50px 0;
}
.complete_note {
  position: relative;
}

.complete_img {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0,-30%);
  width: 15vw;
}

.flipimg {
  width: 70%;
}

.flipbox {
  padding: 10px;
}

.quicky {
  background-color: orange;
  border-radius: 10px;
  margin-bottom: 10px;
}

.quicky2 {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}


.overview {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}

.iconright {
  margin-left: 2vw;
}

.security {
  background-image: url('../../assets/img/triangles.png');
  background-size: 120%;
  background-position: center;
}
.security_button {
  background-color: rgba(0, 0, 0, .4)
}

.secritybtn {
  margin-top: 80px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.v-card {
  border-radius: 10px;
}

</style>
