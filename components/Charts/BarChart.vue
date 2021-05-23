<template>
  <div>
    <div style="width: 1000px">
      <canvas id="chart"></canvas>
    </div>
    <div>
      Bar Type:
      <select id="type">
        <option value="candlestick" selected>Candlestick</option>
        <option value="ohlc">OHLC</option>
      </select>
      Scale Type:
      <select id="scale-type">
        <option value="linear" selected>Linear</option>
        <option value="logarithmic">Logarithmic</option>
      </select>
      Color Scheme:
      <select id="color-scheme">
        <option value="muted" selected>Muted</option>
        <option value="neon">Neon</option>
      </select>
      Border:
      <select id="border">
        <option value="true" selected>Yes</option>
        <option value="false">No</option>
      </select>
      <button id="update">Update</button>
      <button id="randomizeData">Randomize Data</button>
    </div>
  </div>
</template>

<script>
// import { Bar } from 'vue-chartjs'
import stockChart from '../../plugins/stock-chart';
export default {
//   extends: Bar,
  props: ['data', 'options'],
  mounted() {
      stockChart.init();
    // this.renderChart(this.data, this.options)
  },
}
</script>

<style></style>
