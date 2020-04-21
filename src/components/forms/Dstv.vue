<template>
    <div class="dstv">
        <v-snackbar
          v-model="validbar"
          :color="bgcolor"
        >
          {{ validMsg }}
          <v-btn
            color="white"
            text
            @click="validbar = false"
            icon
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-snackbar>

        <v-snackbar
          v-model="paybar"
          :color="bgcolor"
        >
          {{ msg }}
          <v-btn
            color="white"
            text
            @click="paybar = false"
            icon
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-snackbar>

        <v-form @submit.prevent="validate_SmartCdard">
            <span>Verify Smartcard Number - </span>
            <span class="green--text">{{ card.firstName }} {{ card.lastName }} <v-icon v-if="verified" size="14" color="green">mdi-checkbox-marked-circle</v-icon></span>
            <v-row>
                <v-col cols="12" md="4" lg="4">
                <v-text-field
                    v-model="service"
                    label="Service Provider"
                    outlined
                    :rules="[rules.required]"
                    readonly
                ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                <v-text-field
                    v-model="smartcard_number"
                    label="Input Smartcard Number"
                    outlined
                    :rules="[rules.required, rules.min]"
                    type="number"
                ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" lg="2">
                <v-progress-circular
                    :size="20"
                    :width="3"
                    color="green"
                    indeterminate
                    v-if="load"
                ></v-progress-circular>
                </v-col>
            </v-row>
        </v-form>
        
        <v-form @submit.prevent="dstv">
            <v-row>
                
                <v-col cols="12" md="6" lg="6">
                <v-text-field
                    v-model="customer_name"
                    label="Customer Name"
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
                    v-model="invoice_period"
                    label="Period"
                    outlined
                    :rules="[rules.required]"
                ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                <v-text-field
                    v-model="plan"
                    label="Plan"
                    outlined
                    :rules="[rules.required]"
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn :loading="loader" @click="loader = !loader" type="submit" class="white--text" color="orange" :disabled="!formIsValid" >Proceed</v-btn>
                    <v-text-field
                        v-model="smartcard_number"
                        class="hidden"
                        outlined
                        :rules="[rules.required]"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
  export default {
    name: 'dstv',

    data () {
      return {
        smartcard_number: '',
        service: 'dstv',
        amount: '',
        customer_name: '',
        invoice_period: '',
        plan: '',

        loader: false,
        load: false,
        verified: false,
        msg: '',
        bgcolor: 'red',
        validbar: false,
        paybar: false,

        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length == 10 || 'Enter the complete 10 digit card number',
        },

      }
    },

    watch: {
      smartcard_number(value){
        this.smartcard_number = value;
        this.validateCard(value);
      },
    },

    methods: {
      validateCard(value) {
        if (value.length == 10){
            this.load = true
            this.$store.dispatch('validateSmartCard', {
            smartcard_number: this.smartcard_number,
            service: this.service,
            
          })
          .then(success => {
            this.load = false
            this.verified = true
            this.bgcolor = 'green'
            this.validbar = true
          })
        }
      },
      dstv() {
        this.$store.dispatch('dstvService', {
          customer_name: this.customer_name,
          smartcard_number: this.smartcard_number,
          amount: this.amount,
          invoice_period: this.invoice_period,
          plan: this.plan
        })
        .then(success => {
          this.paybar = true
          this.msg = 'Payment successful'
          this.bgcolor = 'green'
          this.loader = false
        })
      },
    },

    computed: {
      card() {
        return this.$store.state.cardDetails;
      },

      validMsg() {
        return this.$store.state.validMsg;
      },

      formIsValid () {
        return (
          this.customer_name &&
          this.smartcard_number &&
          this.amount &&
          this.invoice_period &&
          this.plan
        )
      },
    },

  }
</script>

<style scoped>

body {
  position: relative;
}

.alert_sheet {
  position: absolute;
  top: 0;
  right: 2%;
  z-index: 2;
}

.v-progress-circular {
  margin-top: 18px;
}

.hidden {
    visibility: hidden;
}

</style>