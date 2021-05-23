<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index.id">
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import coinMarketCapApi from 'coinmarketcap-api'

export default Vue.extend({
  middleware: ['auth'],
  data() {
    return {
      mountains: [],
    }
  },
  fetchOnServer: false,
  async fetch() {
    this.mountains = await coinMarketCapApi.fetch()
  },
})
</script>
