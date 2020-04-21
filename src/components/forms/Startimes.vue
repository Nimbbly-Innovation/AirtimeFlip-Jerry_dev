<template>
    <div class="startimes">
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
        
        <v-form @submit.prevent="validate_SmartCard">
            <span>Verify Smartcard Number - </span>
            <span class="green--text">{{ card.firstName }} {{ card.lastName }} <v-icon v-if="verified" size="14" color="green">mdi-checkbox-marked-circle</v-icon></span>
            <v-row>
                <v-col cols="12" md="4" lg="4">
                <v-text-field
                    v-model="service"
                    label="Service Provider"
                    outlined
                    :rules="[rules.required]"
                ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                <v-text-field
                    v-model="smartcard_number"
                    label="Input Smartcard Number"
                    outlined
                    :rules="[rules.required, rules.min]"
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

        <v-form @submit.prevent="startimes">
            <v-row>
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
                    v-model="plan"
                    label="Plan"
                    outlined
                    :rules="[rules.required]"
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn :loading="loader" :disabled="!formIsValid" @click="loader = !loader" type="submit" class="white--text" color="orange">Proceed</v-btn>
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

    data () {
      return {
        smartcard_number: '',
        service: 'startimes',
        amount: '',
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
            min: v => v.length == 11 || 'Enter the complete 10 digit card number',
        },

      }
    },

    watch: {
      smartcard_number(value){
        this.smartcard_number = value;
        this.validateCard(value);
      }
    },

    methods: {
      validateCard(value) {
        if (value.length == 11){
            this.load = true
            this.$store.dispatch('validateSmartCard', {
            smartcard_number: this.smartcard_number,
            service: this.service,
          })
          .then(success => {
            this.load = false,
            this.verified = true
          })
        }
      },

      startimes() {
        this.$store.dispatch('startimesService', {
          smartcard_number: this.smartcard_number,
          amount: this.amount
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
          this.smartcard_number &&
          this.amount &&
          this.plan
        )
      },
    },

  }
</script>

<style scoped>

.v-progress-circular {
  margin-top: 18px;
}

.hidden {
    visibility: hidden;
}

</style>