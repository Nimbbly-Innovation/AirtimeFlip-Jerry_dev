<template>
  <div class="charges">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="main_title-caption headline">{{ subtitle }}</span>
          <h2 class="main_title display-1">{{ title }}</h2>
          <img class="line" :src="line">
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="4" lg="4" v-for="card in cards" :key="card.image">
            <v-card
            class="mx-auto text-center"
            >
                <v-card-text>
                    <img class="charges_icon" :src="card.image">
                    <h5 class="charges_heading title">{{ card.heading}}</h5>
                    <p class="charges_subheading">{{ card.subheading}}</p>
                </v-card-text>
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
      subtitle: 'our charges',
      title: 'Charges and Fees',
      line: require('../../assets/img/line.png'),
      cards: [
          {image: require('../../assets/img/tag2.png'), heading: 'Conversion Fees', subheading: 'We charge 19% for MTN and 25% Airtel airtime you sell to us. We charge 30% for 9Mobile and 35% Glo airtime to cash conversions.'},
          {image: require('../../assets/img/merchant.png'), heading: 'Merchant Setup', subheading: 'The merchant feature is currently unavailable.'},
          {image: require('../../assets/img/bank.png'), heading: 'Bank Transfer Fees', subheading: 'Typically, you get a bank alert within 5 - 15 mins of selling airtime.'}
      ],
    }
  },
};
</script>

<style scoped>

.charges {
  padding: 5vh 0;
  margin-bottom: 20vh;
}

.v-card {
  border-radius: 10px;
}

</style>