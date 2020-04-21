<template>
  <div class="webapp">
    <Sidebar />
    <v-content style="padding: 0px 0px 0px 0px;">
        <router-view></router-view>
    </v-content>
    <Footpad />
  </div>
</template>

<script>
import Footpad from '@/components/webapp/Footpad'
import Sidebar from '@/components/webapp/Sidebar'


export default {
    components: {
    Footpad,
    Sidebar
    },

    created() {
      this.$store.dispatch('retrieveBanks')
      this.$store.dispatch('retrieveNetworks')
      this.$store.dispatch('getSpectranetprices')
    },

};
</script>

<style scoped>

</style>
