<template>
  <div class="mail">
    <v-toolbar flat>
      <v-toolbar-title>
          <img src="../assets/img/airtimefllip-w.png" alt="airtimeflip-logo">
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col class="banner_text" cols="12" md="6" lg="6">
          <h1 class="home_title display-2">{{ title }}</h1>
          <br>
          <span class="home_title-caption body-1">{{ subtitle }}</span>
        </v-col>
        <v-col class="banner_img" cols="12" md="6" lg="6">
          <img class="d-none d-sm-flex" width="100%" :src="image" alt="">
        </v-col>
      </v-row>
    </v-container>
    <v-footer
      padless
      absolute
    >
      <v-card
        flat
        tile
        class="text-center"
        width="100%"
      >

        <v-card-text>
          <span>Copyright airtimeflip &#169;</span> {{ new Date().getFullYear() }} — <span>All rights reserved</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      subtitle: 'Lorem ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla, duis ultricies consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent.',
      title: 'Verification e-mail sent',
      image: require('../assets/svg/message_sent.svg')
    }
  },
};
</script>

<style scoped>

.mail {
  padding: 0 2vw;
}

.banner_text {
  padding-top: 20vh;
}

.banner_img {
  padding-top: 5vh;
}

</style>