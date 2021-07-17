<template>
  <div>
    <v-select
      v-model="range"
      :items="ranges"
      style="max-width: 150px"
      filled
      label="Range"
    ></v-select>
    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="5"
      class="elevation-1"
    >
      <template #item.normalized_change="{ item }">
        <v-chip :color="getColor(item.price['percent_change_' + range])" dark>
          {{
            item.price['percent_change_' + range]
              ? item.price['percent_change_' + range].toFixed(2) + ' %'
              : 'N/A'
          }}
        </v-chip>
      </template>
      <template #header.normalized_change="{ header }">
        {{ getHeaderText(header.text) }}
      </template>
    </v-data-table>
    <p>
      Current currency:
      <input id="currency" type="text" :v-model="currency" name="currency" />
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import currencyFormatter from '../plugins/currency'
import Currency from '../models/currency'
const ranges = ['1h', '24h', '7d', '30d', '60d', '90d']
export default Vue.extend({
  async asyncData(): Promise<{ coins: any }> {
    console.log(...arguments)
    const currenciesResult = await fetch(`currencies.json`)
    const pricesResult = await fetch(`tickers.json`)
    const currencies = await currenciesResult.json()
    const prices = await pricesResult.json()
    console.log('result', currencies, prices)
    const coins = currencies.map((currency: Currency) => {
      const price = prices.find((e: { id: any }) => e.id === currency.id)
      if (!price) {
        return currency
      }
      currency.price = price.quote[currency.id]
      currency.normalized_price = currencyFormatter.format(currency.price.price)
      currency.normalized_market_cap = currencyFormatter.format(
        currency.price.market_cap
      )
      // const result = ranges.reduce((acc, current) => {
      //   const key = 'percent_change_' + current;
      //   if(currency.price[key]){
      //   acc['normalized_'+ key] = currency.price[key].toFixed(2);
      //   }
      //   return acc;
      // }, currency);
      // currency.normalized_change =
      //   currency.price['percent_change_' + self.range]
      return currency
    })
    console.log('Got coins', coins)
    return { coins }
  },
  // middleware: ['auth'],
  data() {
    return {
      range: '24h',
      ranges,
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
  mounted() {
    this.currency = 'EUR'
  },
  methods: {
    getColor(val) {
      return Number.parseFloat(val) >= 0 ? 'green' : 'red'
    },
    getHeaderText(val) {
      return val + ` (${this.range})`
    },
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
