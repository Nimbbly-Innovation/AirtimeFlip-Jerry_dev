<template>
  <div class="mob_body">
  <v-toolbar class="mob_navbar" flat>
          <v-btn
            icon
            @click.stop="mini = !mini"
            class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
          >
            <v-icon class="menu">mdi-menu</v-icon>
          </v-btn>
          <v-btn
            icon
            @click.stop="drawer = !drawer"
            class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
          >
            <v-icon class="menu">mdi-menu</v-icon>
          </v-btn>
          <v-toolbar-title>
              <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                  <span v-on="on" class="manager_number white--text">Account Manager</span>
              </template>
              <span>+234 000 0000 0000</span>
              </v-tooltip>
              
              <v-avatar style="width:32px; height:32px;">
                  <img
                      class="manager_img"
                      src=""
                      alt=""
                      style="border-radius: 2px; margin-left: auto;"
                  >
              </v-avatar>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <template v-if="$vuetify.breakpoint.smAndUp">
              <span>{{ user.username }}</span>
              <v-avatar style="width:32px; height:32px; margin-right: 20px;">
                  <img
                      class="user_img"
                      :src="user.avatar"
                      alt=""
                      style="border-radius: 5px; margin-left: auto;"
                  >
              </v-avatar>

              <v-dialog v-model="dialog1" persistent max-width="290">
              <template v-slot:activator="{ on }">
                  <v-btn icon text v-on="on"><v-icon>mdi-exit-to-app</v-icon></v-btn>
              </template>
              
              
              <v-card>
                  <v-card-title class="headline">Logout</v-card-title>
                  <v-card-text>Are you sure you want to logout?</v-card-text>
                  <v-card-actions>
                  
                  <v-btn color="green darken-1" text @click="dialog1 = false">Disagree</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" route to="/Logout" text>Agree</v-btn>
                  </v-card-actions>
              </v-card>
              </v-dialog>
          </template>
          <v-dialog v-model="dialog3" persistent max-width="290">
              <template v-slot:activator="{ on }">
                  <v-btn class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none" icon text v-on="on"><v-icon>mdi-exit-to-app</v-icon></v-btn>
              </template>
              
              
              <v-card>
                  <v-card-title class="headline">Logout</v-card-title>
                  <v-card-text>Are you sure you want to logout?</v-card-text>
                  <v-card-actions>
                  
                  <v-btn color="green darken-1" text @click="dialog3 = false">Disagree</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" route to="/Logout" text>Agree</v-btn>
                  </v-card-actions>
              </v-card>
              </v-dialog>
      </v-toolbar>
    <v-card>
      <v-navigation-drawer
        v-model="drawer2"
        :mini-variant.sync="mini"
        app
        dark
        class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
      >
        <v-list-item v-for="profile in profiles" :key="profile.avatar">
          <v-list-item-avatar style="width: 45px; margin-top: 20px;">
            <img :src="profile.avatar">
          </v-list-item-avatar>

          <v-list-item-title class="pt-4"><v-img :src="profile.logo"></v-img></v-list-item-title>

        </v-list-item>

        <v-list dense class="mt-5 pt-5">
          <v-list-item
            v-for="link in links"
            :key="link.title"
            router :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-link-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
              <v-dialog
                v-model="dialog2"
                width="500"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    v-on="on"
                    class="text-capitalize share_btn"
                  >
                    Share
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="headline"
                    primary-title
                  >
                    Referral Link
                  </v-card-title>

                  <v-card-text>
                    <v-col cols="12">
                      <v-text-field
                        label="link"
                        outlined
                        readonly
                        value="http://www.airtimeflip.com/tekjfjf240jdf0008ndjndf07e-@jhjd"
                      ></v-text-field>
                    </v-col>
                    <div class="text-center">
                      <v-btn class="mx-4" fab small>
                      <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-whatsapp</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-google</v-icon>
                      </v-btn>
                    </div>
                  </v-card-text>

                  <v-card-actions >
                    
                  </v-card-actions>
                </v-card>
              </v-dialog>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
      </v-navigation-drawer>
    </v-card>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
        dark
      >
        <v-list-item>

          <v-list-item-content>
            <img class="mob_banner" src="../../assets/img/airtimefllip-b.png" alt="airtimeflip-logo">
          </v-list-item-content>
        </v-list-item>


        <v-list dense>

           <v-list-item
            v-for="link in links"
            :key="link.title"
            router :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-link-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
              <v-dialog
                v-model="dialog2"
                width="500"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    v-on="on"
                    class="text-capitalize share_btn"
                  >
                    Share
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="headline"
                    primary-title
                  >
                    Referral Link
                  </v-card-title>

                  <v-card-text>
                    <v-col cols="12">
                      <v-text-field
                        label="link"
                        outlined
                        readonly
                        value="http://www.airtimeflip.com/tekjfjf240jdf0008ndjndf07e-@jhjd"
                      ></v-text-field>
                    </v-col>
                    <div class="text-center">
                      <v-btn class="mx-4" fab small>
                      <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-whatsapp</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn class="mx-4" fab small>
                        <v-icon>mdi-google</v-icon>
                      </v-btn>
                    </div>
                  </v-card-text>

                  <v-card-actions >
                    
                  </v-card-actions>
                </v-card>
              </v-dialog>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
  </div>
</template>


<script>

  export default {
    data () {
      return {
        drawer: false,
        drawer2: true,
        mini: true,
        dialog1: false,
        dialog2: false,
        dialog3: false,
        profiles:[
          { avatar: require('../../assets/img/flip2.png'), logo: require('../../assets/img/flip3.png')}
        ],
        links: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', route: '/webapp' },
          { title: 'Convert-Airtime', icon: 'mdi-cached', route: '/webapp/convert' },
          { title: 'Wallet', icon: 'mdi-wallet', route: '/webapp/wallet' },
          { title: 'Withdrawal', icon: 'mdi-cash-multiple', route: '/webapp/withdrawal'},
          { title: 'Transfer', icon: 'mdi-account-convert', route: '/webapp/transfer' },
          { title: 'Airtime Topup', icon: 'mdi-cellphone-android', route: '/webapp/airtime' },
          { title: 'Buy Data', icon: 'mdi-access-point-network', route: '/webapp/data'},
          { title: 'Pay Bills', icon: 'mdi-shopping', route: '/webapp/bills' },
          { title: 'History', icon: 'mdi-history', route: '/webapp/history' },
          { title: 'Settings', icon: 'mdi-brightness-7', route: '/webapp/settings' },
        ],
      }
    },

    computed: {
      user() {
        return this.$store.state.user;
      }
    }

  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {

  .v-toolbar {
    background-color: orange;
  }

  .v-toolbar .v-toolbar__content .v-btn .v-btn__content .v-icon  {
    color: #fff;
  }

}

.v-list-item--active {
  background-color: orange;
  color: #fff;
}

.v-card {
  border-radius: 0px;
}

.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 14px;
}

.share_btn {
  padding: 0px !important;
  margin-left: -10px !important;
}

.share_btn:hover {
  background-color: rgba(0, 0, 0, .1)
}

.v-toolbar__title {
    background-color: #FAB300;
    padding-left: 1rem;
    border-radius: 5px;
}

.manager_number {
    font-size: .8rem;
}

.mob_banner {
  width: 10px;
}

</style>
