<template>
  <div>
    <v-row justify="center" align="center">
    <v-col cols="10"><div class="tradingview-widget-container">
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_ca661"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ETHEUR/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">ETHEUR Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "width": 980,
  "height": 610,
  "symbol": "BINANCE:ETHEUR",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "container_id": "tradingview_ca661"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->
</div>
    </v-col>
  </v-row>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => {
    return {
      // Data points for the chart
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 7 },
        { x: 2, y: 3 },
        { x: 3, y: 10 },
      ],
    }
  },
  created() {
  },
}
</script>
