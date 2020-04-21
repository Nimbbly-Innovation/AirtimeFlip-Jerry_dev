<template>
  <div class="datapin">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" lg="8" class="datapin_note">
          <h2 class="main_title display-1">{{ title }}</h2>
          <br>
          <div class="datapin_text">
                <p class="data_text body-1 font-weight-light">{{ datatext }}</p>
                <p class="data_link body-1 font-weight-light"><router-link class="orange--text" to="/faq">{{ linktext }}</router-link></p>
                <v-btn
                  color="orange"
                  dark
                  text
                  @click.stop="dialog = true"
                >
                  Become a merchant
                </v-btn>

                <v-dialog
                  v-model="dialog"
                  max-width="500"
                >
                  <v-card class="pa-4">
                    <v-card-title class="headline">Become A Merchant</v-card-title>
                    <v-form>

                      <v-card-text>
                          <v-container fluid>
                            <v-row>
                              <v-col cols="12" md="7" lg="7">
                                <v-text-field
                                    v-model="fullname"
                                    label="Fullname"
                                    outlined
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="5" lg="5">
                                <v-text-field
                                    v-model="number"
                                    label="Phone Number"
                                    outlined
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="8" lg="8">
                                <v-text-field
                                    v-model="email"
                                    label="Email"
                                    outlined
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4" lg="4">
                                <v-text-field
                                    v-model="location"
                                    label="Location"
                                    outlined
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-btn
                                  class="white--text"
                                  color="orange"
                                  @click="dialog = false"
                                >
                                  Send
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-container>
                      </v-card-text>
                    </v-form>
                  </v-card>
                </v-dialog>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Data PIN</v-toolbar-title>
            </v-toolbar>
              <v-form>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                      :items="items"
                      label="Select Network"
                      outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="datapin"
                          label="Data PIN"
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="number"
                          label="Phone Number"
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-btn class="mr-4 white--text" color="orange" @click="submit">Recharge</v-btn>
                      <br> <br>
                      <span>Check your data balance *233*1#</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
        dialog: false,
        title: 'Lorem ipsum dolor sit amet, Data PIN',
        datatext: 'Lorem ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla, duis ultricies consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor. Massa wisi tellus pellentesque tortor.',
        items: ['MTN', 'GLO', '9mobile', 'Airtel'],
    }
  },
};
</script>

<style>

.datapin {
  padding-top: 5vh;
  padding-bottom: 20vh; 
}

.datapin_note {
  padding-top: 5vh;
}

</style>