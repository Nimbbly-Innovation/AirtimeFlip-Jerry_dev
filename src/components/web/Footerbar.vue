<template>
  <div>
    <v-footer
      padless
      absolute
      class="d-none d-sm-flex"
    >
      <v-card
        flat
        tile
        class="text-center"
        width="100%"
      >
        <v-card-text class="social_icon">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-2"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text>
          <span>Copyright airtimeflip &#169;</span> {{ new Date().getFullYear() }} — <span>All rights reserved</span>
        </v-card-text>
      </v-card>
    </v-footer>
    <div class=" footers d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
      <img class="footers_grass" width="100%" src="../../assets/svg/grass.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>

.social_icon {
  padding: 0 !important;
}

.footers {
  position: relative;
}

.footers_grass {
  position: absolute;
  left: 0;
  bottom: 0;
}

</style>