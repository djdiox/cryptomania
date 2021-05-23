<template>
  <v-data-table
    :headers="headers"
    :items="coins"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script lang="ts">
import Vue from 'vue'
import unirest from 'unirest';
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
        {
          text: 'Symbol',
          align: 'start',
          sortable: true,
          value: 'symbol',
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
  async asyncData({ params}) {
  const response = await fetch(`/api/getCryptoCurrencies`, {cache: 'force-cache'}).then(e => e.json());
  console.log('Got response', response)
  return { coins: response.data.data }
}
  // fetchOnServer: false,
  // async fetch() {
  //   debugger;
  //   const coins = await this.$http(
  //     'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=500&convert=EUR',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'X-CMC_PRO_API_KEY': process.env.NUXT_ENV_COINMARKET_CAP_API_KEY,
  //         Accept: 'application/json',
  //       'Accept-Charset': 'utf-8',
  //       'Accept-Encoding': 'deflate, gzip'
  //       },
  //     }
  //   ).then(res => res.json(), err => console.error(err));
  //   debugger;
  //   this.coins = coins
  //   // return { post }
  // },
})
</script>
