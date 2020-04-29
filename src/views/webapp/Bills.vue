<template>
  <div class="bill">
    <v-container>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Pay Bills</v-toolbar-title>
            </v-toolbar>
            <v-tabs color="orange">
              <v-tab>Cable Payment</v-tab>
              <v-tab>Internet Subscription</v-tab>
              <v-tab>Power Bill</v-tab>
              <v-tab>Education</v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>Select Provider</p>

                    <v-tabs>
                      <v-tab>DSTV</v-tab>
                      <v-tab>GOTV</v-tab>
                      <v-tab>Startime</v-tab>

                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <Dstv></Dstv>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <Gotv></Gotv>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-card-text>
                            <Startimes></Startimes>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>Select Provider</p>
                    <v-tabs>
                      <v-tab>Spectranet</v-tab>

                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="spectranet">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service Code"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-select
                                    v-model="price"
                                    :items="prices"
                                    item-text="amount"
                                    item-value="amount"
                                    return-object
                                    label="price"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="number_of_pins"
                                    label="pins"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>Select Provider</p>

                    <v-tabs>
                      <v-tab>Abuja Prepaid</v-tab>
                      <v-tab>Ibadan Prepaid</v-tab>
                      <v-tab>Ikeja Electric Bill</v-tab>
                      <v-tab>KEDCO Postpaid</v-tab>
                      <v-tab>KEDCO Prepaid</v-tab>

                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="abuja_prepaid">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service ID"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="meter_number"
                                    label="Meter Number"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="amount"
                                    label="Amount"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="ibadan_prepaid">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service ID"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="customer_reference"
                                    label="Meter Number"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="amount"
                                    label="Amount"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="ikeja_electric">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service ID"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="customer_number"
                                    label="Customer Number"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="amount"
                                    label="Amount"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="phone"
                                    label="Phone"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="contact_type"
                                    label="Contact Type"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="kedco_postpaid">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service ID"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="customer_reference"
                                    label="Customer Reference"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="amount"
                                    label="Amount"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="kedco_prepaid">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service ID"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="customer_reference"
                                    label="Customer Reference"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="amount"
                                    label="Amount"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <p>Select Provider</p>

                    <v-tabs>
                      <v-tab>WAEC</v-tab>

                      <v-tab-item>
                        <v-card flat>
                          <v-form @submit.prevent="waec">
                            <v-card-text>
                              <v-row>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="service_id"
                                    label="Service ID"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="number_of_pins"
                                    label="Pin Number"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6" lg="6">
                                  <v-text-field
                                    v-model="price"
                                    label="Price"
                                    outlined
                                    :rules="[rules.required]"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <br />
                              <v-row>
                                <v-col cols="12">
                                  <v-btn type="submit" class="white--text" color="orange">Proceed</v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
        <v-col md="4" lg="4">
          <v-card class="overview">
            <v-list-item three-line>
              <v-list-item-content class="text-right">
                <p>{{ }}</p>
                <span class="caption grey--text">Plan</span>
                <br />
                <p>&#x20A6; {{ }}.00</p>
                <span class="caption grey--text">Amount</span>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-icon color="orange">mdi-qrcode</v-icon>
                  <span>Payment Method</span>
                </v-col>
                <v-col class="text-right" cols="12">
                  <span>Naira</span>
                </v-col>
                <v-col cols="12">
                  <v-icon color="orange">mdi-checkbox-multiple-marked</v-icon>
                  <span>Available</span>
                </v-col>
                <v-col class="text-right" cols="12">
                  <span>Instantly</span>
                </v-col>
                <v-col cols="12">
                  <v-icon color="orange">mdi-cart</v-icon>
                  <span>Purchasing for</span>
                </v-col>
                <v-col class="text-right" cols="12">
                  <span>{{ }}</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row>
                <v-col cols="6">
                  <span>Total Payout</span>
                </v-col>
                <v-col cols="6" class="text-right">
                  <span>&#x20A6; {{ }}.00</span>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="spacing"></div>
  </div>
</template>

<script>
import Dstv from "../../components/forms/Dstv";
import Gotv from "@/components/forms/Gotv";
import Startimes from "@/components/forms/Startimes";
import Alert from "@/components/alerts/Alert";

export default {
  components: {
    Dstv,
    Gotv,
    Startimes,
    Alert
  },

  name: "gotv",
  name: "startimes",
  name: "spectranet",
  name: "abuja_prepaid",
  name: "ibadan_prepaid",
  name: "ikeja_electric",
  name: "kedco_postpaid",
  name: "kedco_prepaid",
  name: "waec",
  name: "validate_SmartCdard",

  data: () => ({
    customer_number: "",
    customer_reference: "",
    contact_type: "",
    meter_number: "",
    number_of_pins: "",
    price: "",
    phone: "",
    service_id: "",
    amount: "",

    rules: {
      required: value => !!value || "Required."
    }
  }),

  methods: {
    spectranet() {
      this.$store
        .dispatch("spectranetService", {
          service_id: this.service_id,
          price: this.price,
          number_of_pins: this.number_of_pins
        })
        .then(success => {});
    },
    abuja_prepaid() {
      this.$store
        .dispatch("abujaprepaidService", {
          service_id: this.service_id,
          meter_number: this.meter_number,
          amount: this.amount
        })
        .then(success => {});
    },
    ibadan_prepaid() {
      this.$store
        .dispatch("ibadanprepaidService", {
          service_id: this.service_id,
          customer_reference: this.customer_reference,
          amount: this.amount
        })
        .then(success => {});
    },
    ikeja_electric() {
      this.$store
        .dispatch("ikejaelectricService", {
          service_id: this.service_id,
          customer_number: this.customer_number,
          amount: this.amount,
          phone: this.phone,
          contact_type: this.contact_type
        })
        .then(success => {});
    },
    kedco_postpaid() {
      this.$store
        .dispatch("kedcopostpaidService", {
          service_id: this.service_id,
          customer_reference: this.customer_reference,
          amount: this.amount
        })
        .then(success => {});
    },
    kedco_prepaid() {
      this.$store
        .dispatch("kedcoprepaidService", {
          service_id: this.service_id,
          customer_reference: this.customer_reference,
          amount: this.amount
        })
        .then(success => {});
    },
    waec() {
      this.$store
        .dispatch("waecService", {
          service_id: this.service_id,
          number_of_pins: this.number_of_pins,
          price: this.price
        })
        .then(success => {});
    }
  },

  computed: {
    prices() {
      return this.$store.state.prices;
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 959px) {
  .spacing {
    height: 10vh;
  }

  .form__checks .form__group {
    margin-right: 0.2rem;
    padding: 0.5rem 0;
    display: inline;
  }

  .v-application--is-ltr
    .v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows)
    > .v-slide-group__wrapper
    > .v-tabs-bar__content
    > .v-tab:first-child,
  .v-application--is-ltr
    .v-tabs-bar.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows)
    > .v-slide-group__wrapper
    > .v-tabs-bar__content
    > .v-tabs-slider-wrapper
    + .v-tab {
    margin-left: 0;
  }
}

@media only screen and (min-width: 959px) {
  .form__checks .form__group {
    margin-right: 1rem;
    display: inline;
  }

  .spacing {
    height: 10vh;
  }
}

.overview {
  padding: 10px;
}

.form__checks .form__checks-label {
  display: inline-block;
  padding: 10px;
  border: solid 0.1rem gray;
  border-radius: 0.8rem;
  transition: all 0.3s;
  color: gray;
  font-size: 0.8rem;
}

.form__checks .form__checks-input[type="radio"] {
  display: none;
  padding-top: 5px;
  padding-bottom: 5px;
}

.form__checks .form__checks-input[type="radio"]:checked + label {
  border: solid 2px orange;
  color: orange;
}

.hide {
  display: none;
}

.service_content {
  height: 55px;
  margin-bottom: 25px;
  width: 100%;
  border: solid 1px rgba(149, 145, 140, 0.5);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
}
</style>