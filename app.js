const priceOutput = document.querySelector('#priceOutput')
fetch(process.env.NODE_ENV)
    .then(response => response.json())
    .then(data => {
        data.forEach(price => {
            const outputPrice =  '<h3>' + '$' + price + '</h3>'
            priceOutput.insertAdjacentHTML("afterbegin", outputPrice)
        })
    })

const discountDisplay = document.querySelector('#discountData')
fetch(process.env.NODE_ENV)
    .then(response => response.json())
    .then(data => {
        data.forEach(price => {
            const savings = '<h3>' + '$' + (2500 - parseInt(price.substring(0,1) + price.substring(2,5))) + '</h3>'
            discountDisplay.insertAdjacentHTML("afterbegin", savings)
        })
    })
