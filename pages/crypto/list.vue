<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
  export default {
    data () {
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
                all: 100000
            }
          },
        ],
      }
    },
  }
</script>