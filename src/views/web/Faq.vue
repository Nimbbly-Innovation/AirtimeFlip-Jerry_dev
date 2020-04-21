<template>
  <div class="faqs" >
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
                <v-row>
                    <v-col cols="12" md="2" lg="2">
                        <img class="faq_icon" :src="card.image">
                    </v-col>
                    <v-col cols="12" md="8" lg="8">
                        <h4 class="faq_heading">{{ card.heading }}</h4>
                        <p class="faq_subheading">{{ card.subheading }}</p>
                    </v-col>
                    <v-col md="2" lg="2"></v-col>
                </v-row>
            </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      subtitle: 'what you should know',
      title: 'Frequently Asked Questions',
      line: require('../../assets/img/line.png'),
      cards: [
          {image: require('../../assets/img/inclined-smartphone.png'), heading: 'What airtime can be used?', subheading: 'AirtimeFlip now accepts accepts all networks, which includes MTN, Airtel, Glo, and 9Mobile.'},
          {image: require('../../assets/img/hand.png'), heading: 'How do I convert airtime to cash?', subheading: 'Using our online converter, it is very easy.'},
          {image: require('../../assets/img/loupe.png'), heading: 'What is the minimum and maximum airtime amount accepted?', subheading: 'This varies for all four networks. The lowest airtime amount you can sell to us here is ₦ 750 for MTN, and ₦ 1000 for Airtel, 9Mobile and Glo.'},
          {image: require('../../assets/img/tag.png'), heading: 'What are the fees?', subheading: 'We charge only 19% fee on each MTN airtime transaction. So we will send ₦ 810 into your bank account if you convert ₦ 1000 airtime (19%), and so on. This is the cheapest offer available in Nigeria at the moment. Check our Charges page to see others.'},
          {image: require('../../assets/img/clock.png'), heading: 'When will I receive the cash?', subheading: 'The money will be sent into your bank account once we receive your airtime.'},
          {image: require('../../assets/img/link.png'), heading: 'Do I get referral commission?', subheading: 'Coming soon. We plan 2% referral commission on all airtime transaction.'}
      ],
    }
  },
};
</script>

<style lang="scss">

.faqs {
  padding-top: 5vh;
  padding-bottom: 20vh;
}

</style>