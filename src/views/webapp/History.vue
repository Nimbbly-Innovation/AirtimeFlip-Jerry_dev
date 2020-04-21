<template>
  <div class="history">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              History
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="spacing"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Transactions',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Transaction ID', value: 'id' },
          { text: 'Amount', value: 'amount' },
          { text: 'Date', value: 'date' },
          { text: 'Time', value: 'time' },
        ],
        desserts: [
          {
            name: 'Bill Payment',
            id: 3069859,
            amount: '20,000',
            date: '05.11.2019',
            time: '03:39 PM',
          },
        ],
      }
    },
  }
</script>

<style scoped>

@media only screen and (max-width: 959px) {

  .spacing {
    height: 10vh;
  }

}

</style>