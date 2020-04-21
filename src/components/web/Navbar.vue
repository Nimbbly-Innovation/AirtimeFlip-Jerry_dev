<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
        <router-link to="/"><img src="../../assets/img/airtimefllip-w.png" alt="airtimeflip-logo"></router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn v-for="link in links" :key="link.text" route :to="link.route" text>{{ link.text }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-none d-sm-flex" v-if="!loggedIn">
        <v-btn route to="/signin" text>Sign in</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-none d-sm-flex" v-if="loggedIn">
        <v-btn route to="/logout" text>Logout</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-sm-none">
        <v-btn
          @click.stop="drawer = !drawer"
          icon
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
    >
      <v-list-item>
        <v-toolbar-title>
          <img width="80%" style="padding: 20px 0;" src="../../assets/img/airtimefllip-b.png" alt="airtimeflip-logo">
        </v-toolbar-title>
      </v-list-item>


      <v-list dense>

        <v-list-item
          v-for="link in links"
          :key="link.text"
          route :to="link.route"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item route to="/signin" link v-if="!loggedIn">
          <v-list-item-content>
            <v-list-item-title>Sign in</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item route to="/logout" link v-if="loggedIn">
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
    data() {
        return {
          drawer: null,
            links: [
                {text: 'Home', route: '/'},
                {text: 'About', route: '/about'},
                {text: 'Faq', route: '/faq'},
                {text: 'Charges', route: '/charges'},
                {text: 'Services', route: '/services'},
                {text: 'Datapin', route: '/datapin'},
                {text: 'Contact', route: '/contact'},
            ]
        }
    },
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    }
};
</script>
