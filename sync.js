
const CoinMarketCap = require('coinmarketcap-api');
const client = new CoinMarketCap(process.env.NUXT_ENV_COINMARKET_CAP_API_KEY);
const fs = require('fs');
(async () => {
    const idMap = await client.getIdMap({limit:5000, listingStatus: 'active'})
    const idMap2 = await client.getIdMap({start:5000, limit:5000, listingStatus: 'active'});
    const coins = [...idMap.data, ...idMap2.data];
    fs.writeFileSync('./currencies.json', JSON.stringify(coins, null, 2))
    const globals = await client.getGlobal('EUR');
    fs.writeFileSync('./global_EUR.json', JSON.stringify(globals));
    const tickers1 = await client.getTickers({limit: 5000,cryptocurrencyType: 'all', convert: 'EUR' })
    const tickers2 = await client.getTickers({start:5000, limit: 5000,cryptocurrencyType: 'all', convert: 'EUR' })

    fs.writeFileSync('./tickers.json', JSON.stringify([...tickers1.data, ...tickers2.data], null, 2))
})()