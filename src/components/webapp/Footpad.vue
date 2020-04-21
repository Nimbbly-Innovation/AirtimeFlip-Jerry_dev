<template>
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
</template>

<style scoped>
@media only screen and (max-width: 959px) {

  .v-footer .v-card {
    background-color: #fdd985;
  }

}
</style>