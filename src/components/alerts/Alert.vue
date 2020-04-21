<template>
    <div class="alert">

        <v-alert
            class="alert_sheet"
            dense
            :value="success1"
            color="success"
            max-width="400"
            dismissible
            dark
        >
            {{ validMsg }}
        </v-alert>
        <v-alert
            class="alert_sheet"
            dense
            :value="error1"
            color="error"
            max-width="400"
            dismissible
            dark
        >
            I'm a dense alert with a type of info
        </v-alert>
        
    </div>
</template>

<script>
  export default {

    data () {
      return {
        

      }
    },

    methods: {
      

    },

    computed: {
      
    },

  }
</script>

<style scoped>



</style>