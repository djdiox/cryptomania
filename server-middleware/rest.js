const bodyParser = require('body-parser')
const app = require('express')()
const CoinMarketCap = require('coinmarketcap-api')
const fs = require('fs')
app.use(bodyParser.json())
const client = new CoinMarketCap(process.env.NUXT_ENV_COINMARKET_CAP_API_KEY)
app.all('/getCryptoCurrencies', async (req, res) => {
  const response = await client.getIdMap({limit:0})
  const save = {
    updated: new Date().getTime(),
    data: response.data,
  }
  fs.writeFileSync('./currencies.json', JSON.stringify(save))

  res.json(response.data)
})

module.exports = app
    