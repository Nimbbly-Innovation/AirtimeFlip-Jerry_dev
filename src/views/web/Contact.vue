<template>
  <div class="contact">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="main_title-caption headline">{{ subtitle}}</span>
          <h2 class="main_title display-1">{{ title }}</h2>
          <img class="line" :src="line">
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="6" lg="6">
              <h5>Send Us A Message</h5>
              <span>We will get back to you as fast as possible</span>
              <v-form>
                  <v-row>
                      <v-col cols="12">
                          <v-text-field
                            v-model="name"
                            label="Full Name"
                            outlined
                            required
                            ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                        outlined
                        v-model="email"
                        label="Email"
                        required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                          <v-text-field
                            v-model="subject"
                            label="Subject"
                            outlined
                            required
                            ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label="Message"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <v-btn class="mr-4 white--text" color="orange" @click="submit">Send</v-btn>
                      </v-col>
                  </v-row>
              </v-form>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <h5>Email Us At</h5>
            <p>contact@airtimeflip.com</p>
            <p>info@airtimeflip.com</p>
            <h5>Call Us At</h5>
            <p>Phone: +234 - 8134291424</p>
            <h5>Get Notified</h5>
            <span>Subscribe to our news letter to get the latest update</span>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                  outlined
                  v-model="email"
                  label="Email"
                  required
                  ></v-text-field>
                  <v-btn class="mr-4 white--text" color="orange" @click="submit">Subscribe</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      subtitle: 'Contact Us',
      title: 'If you have any question',
      line: require('../../assets/img/line.png'),
      name: '',
      subject: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
      },
    }
  },
};
</script>

<style>

.contact {
  padding-top: 5vh;
  padding-bottom: 20vh;
}

</style>