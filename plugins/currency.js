export default  {
    format(val, lang = 'de-DE', currency = process.env.NUXT_ENV_CURRENCY) {
        const formatter = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: process.env.NUXT_ENV_CURRENCY,
            minimumFractionDigits: 2,
          })
          return formatter.format(val) 
    }
}