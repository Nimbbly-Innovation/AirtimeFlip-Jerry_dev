<template>
  <div class="services">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="main_title-caption headline">{{ subtitle }}</span>
          <h2 class="main_title display-1">{{ title }}</h2>
          <img class="line" :src="line">
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="6" lg="6" v-for="card in cards" :key="card.image">
                <v-card>
                    <v-card-text>
                    <v-row>
                        <v-col class="text-center" sm="12" md="2" lg="2">
                            <img class="service_icon" :src="card.image">
                        </v-col>
                        <v-col sm="12" md="10" lg="10">
                            <h5 class="service_heading subtitle-2 black--text">{{ card.heading}}</h5>
                            <p class="service_subheading body-2">{{ card.subheading}}</p>
                        </v-col>
                    </v-row>
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
      subtitle: 'why we are unique',
      title: 'Our Amazing Features',
      line: require('../../assets/img/line.png'),
      cards: [
          {image: require('../../assets/img/clock2.png'), heading: 'Quick Converter', subheading: "Airtimeflip is simply the fastest converter in Nigeria. it's an on-the-go process."},
          {image: require('../../assets/img/shield.png'), heading: 'Secure Transactions', subheading: 'Turn your airtime to cash under secured connection. No third-party involved.'},
          {image: require('../../assets/img/connection.png'), heading: 'Funds Transfer', subheading: 'Airtimeflip charges only 13% on each airtime amount - the best in Nigeria till date.'},
          {image: require('../../assets/img/bill.png'), heading: 'Bill Payments', subheading: 'Payment to your bank account is made under 5 - 10 minutes guaranteed after confirmation.'},
          {image: require('../../assets/img/tags.png'), heading: 'Lower Rates', subheading: 'Airtimeflip charges only 13% on each airtime amount - the best in Nigeria till date.'},
          {image: require('../../assets/img/clock2.png'), heading: 'Instant Withdrawal', subheading: 'Payment to your bank account is made under 5 - 10 minutes guaranteed after confirmation.'},
          {image: require('../../assets/img/cloud-computing.png'), heading: 'Data Topup', subheading: 'Airtimeflip charges only 13% on each airtime amount - the best in Nigeria till date.'},
          {image: require('../../assets/img/mobile.png'), heading: 'Airtime Purchase', subheading: 'Payment to your bank account is made under 5 - 10 minutes guaranteed after confirmation.'},
      ],
    }
  },
};
</script>

<style lang="scss">

.v-card {
  border-radius: 10px;
}

.services {
  padding-top: 5vh;
  padding-bottom: 20vh;
}

</style>