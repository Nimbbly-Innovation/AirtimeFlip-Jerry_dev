<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-col class="banner_text" cols="12" md="6" lg="6">
          <span class="main_title-caption headline">{{ subtitle}}</span>
          <h2 class="main_title display-1">{{ title }}</h2>
          <img class="line" :src="line">
          <div class="abt_text">
            <p class="about_text headline font-weight-light">{{ text }}</p>
            <p class="faq_link headline font-weight-light" :href="faqlink"><router-link class="orange--text" to="/faq">{{ linktext }}</router-link></p>
          </div>
        </v-col>
        <v-col class="banner_img d-none d-sm-flex" cols="12" md="6" lg="6">
          <img width="80%" :src="image" alt="">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      subtitle: 'hello there',
      title: 'We Are Airtime Flip',
      line: require('../../assets/img/line.png'),
      text: 'AirtimeFlip makes it possible for you to convert airtime to money deposited into your bank account. It boasts as one of the fastest airtime converter in Nigeria with 99% automated transaction.',
      faqlink: '/faq',
      linktext: 'Here are answers to your questions.',
      image: require('../../assets/svg/transfer_money.svg')
    }
  },
};
</script>

<style scoped>

.about {
  padding: 0 2vw;
  margin-bottom: 20vh;
  height: 90vh;
}

.banner_text {
  padding-top: 15vh;
}

.banner_img {
  padding-top: 5vh;
}

.abt_text {
  padding: 20px 0;
}

</style>