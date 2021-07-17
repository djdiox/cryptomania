const fs = require('fs')
const bodyParser = require('body-parser')
const app = require('express')()
const CoinMarketCap = require('coinmarketcap-api')
app.use(bodyParser.json())
const client = new CoinMarketCap(process.env.NUXT_ENV_COINMARKET_CAP_API_KEY)
app.all('/getCryptoCurrencies', async (req, res) => {
  const query = JSON.parse(req.body)

  const response = await client.getIdMap({ limit: 0 })
  const save = {
    updated: new Date().getTime(),
    data: response.data,
  }
  fs.writeFileSync('./currencies.json', JSON.stringify(save))

  res.json(response.data)
})

module.exports = app
