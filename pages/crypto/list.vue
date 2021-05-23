<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script lang="ts">
import currency from '../../components/crypto/currency.vue'
import Vue from 'vue'
import CoinMarketCap  from 'coinmarketcap-api';
export default Vue.extend({
  // middleware: ['auth'],
  data() {
    return {
      headers: [
        {
          text: 'Rank',
          align: 'start',
          sortable: true,
          value: 'rank',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Price', value: 'price' },
        { text: 'Change ()', value: 'changes.day' },
        { text: 'Favorite', value: 'favorite' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
      ],
      coins: [
        {
          name: 'Bitcoin',
          rank: 1,
          price: 430,
          favorite: false,
          changes: {
            day: 24,
            week: -32,
            month: 400,
            year: 1000,
            all: 100000,
          },
        },
      ],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const client = new CoinMarketCap(process.env.COINMARKET_CAP_API_KEY)
    this.coins = await client.getIdMap({limit:100});
    console.log(client, this.coins);
  },
})
</script>
