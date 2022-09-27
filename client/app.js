const priceOutput = document.querySelector('#priceOutput')
fetch('https://backend-mac-scraper.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        data.forEach(price => {
            const outputPrice =  '<h3>' + '$' + price + '</h3>'
            priceOutput.insertAdjacentHTML("afterbegin", outputPrice)
        })
    })

const discountDisplay = document.querySelector('#discountData')
fetch('https://backend-mac-scraper.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
        data.forEach(price => {
            const savings = '<h3>' + '$' + (2499 - parseInt(price.substring(0,1) + price.substring(2,5))) + '</h3>'
            discountDisplay.insertAdjacentHTML("afterbegin", savings)
        })
    })

