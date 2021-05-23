<template>
  <div>
    <v-select
      :items="ranges"
      style="max-width: 150px"
      v-model="range"
      @change="$fetch"
      filled
      label="Range"
    ></v-select>
    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.normalized_change="{ item }">
        <v-chip v-if="item.normalized_change" :color="getColor(item.normalized_change)" dark>
          {{ item.normalized_change.toFixed(2) + ' %' }}
        </v-chip>
      </template>
      <template v-slot:header.normalized_change="{ header }">
        {{ getHeaderText(header.text) }}
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import currencyFormatter from '../plugins/currency'
export default Vue.extend({
  // middleware: ['auth'],
  data() {
    return {
      range: '24h',
      ranges: ['1h', '24h', '7d', '30d', '60d', '90d'],
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
        { text: 'Price', value: 'normalized_price' },
        { text: `Change `, value: 'normalized_change' },
        { text: 'Market Cap', value: 'normalized_market_cap' },
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
  methods: {
    getColor(val) {
      return Number.parseFloat(val) >= 0 ? 'green' : 'red'
    },
    getHeaderText(val){
      return val + ` (${this.range})`
    }
  },
  async fetch() {
    const currencies = await fetch(`/currencies.json`).then((e) => e.json())
    const prices = await fetch(`/tickers.json`).then((e) => e.json())
    const coins = currencies.map(
      (currency: {
        id: any
        price: any
        normalized_price: any
        normalized_market_cap: any
        normalized_change: any
      }) => {
        const price = prices.find((e: { id: any }) => e.id === currency.id)
        currency.price = price.quote[process.env.NUXT_ENV_CURRENCY]
        currency.normalized_price = currencyFormatter.format(
          currency.price.price
        )
        currency.normalized_market_cap = currencyFormatter.format(
          currency.price.market_cap
        )
        currency.normalized_change =
          currency.price['percent_change_' + this.range]
        return currency
      }
    )
    console.log('Got coins', coins)
    this.coins = coins
  },
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
