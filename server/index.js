const PORT =  process.env.PORT || 8000

const axios = require('axios').default
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const url = ['https://www.bestbuy.com/site/macbook-pro-16-laptop-apple-m1-pro-chip-16gb-memory-512gb-ssd-latest-model-space-gray/6450858.p?skuId=6450858&ref=NS&loc=101']
url.push('https://www.microcenter.com/product/644039/MacBook_Pro_MKGQ3LL-A_(Late_2021)_142%22_Laptop_Computer_-_Space_Gray;_Apple_M1_Pro_10-Core_CPU;_16GB_Unified_Memory;_1TB_Solid_State_Drive;_16-Core_GPU?storeID=025')
url.push('https://expercom.com/collections/macbook-pro/products/new-16-inch-macbook-pro?variant=39741370597410#APPLEINSIDER&ranMID=43979&ranEAID=1841495&ranSiteID=SnlbqrT3b2s-F9VjLL59j4JW._XFGJpnfA')
const priceClass = ['.sr-only', '.fbBundleProductCost', '.h1 '] //BESTBUY, MICROCENTER
const bestBuySpacing = [29, 34]
const microcenterSpacing = [1, 6]
const expercomSpacing = [681,686]
const idxSpacing = [bestBuySpacing, microcenterSpacing, expercomSpacing]
const prices = []

for (let i = 0; i < 3; i++) {
    axios(url[i])
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            prices.push(($(priceClass[i], html)).text().substring(idxSpacing[i][0], idxSpacing[i][1]))
            console.log(prices)
        }).catch(err => console.log(err))
}

app.get('/', function(req,res){
    res.json(prices)
})

app.listen(PORT, () => console.log(PORT))
