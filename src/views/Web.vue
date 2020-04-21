<template>
  <div class="web">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footerbar />
  </div>
</template>

<script>
import Navbar from '@/components/web/Navbar'
import Footerbar from '@/components/web/Footerbar'


export default {
  components: { 
    Navbar,
    Footerbar
    },
  
};
</script>
