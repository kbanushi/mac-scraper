# mac-scraper

This project is intended to scrape the price of a 16 inch Macbook pro from a few websites online, namely BestBuy, MicroCenter, and Expercom.
It stores the data into a backend, which I chose to host through another heroku website for simplicity, then once it is fetched to the front end the discount of the laptop is calculated and then displayed.

This project uses APIs Axios, Cheerio, Express, Cors, and is hosted on Heroku at https://m16-scraper.herokuapp.com/

I came across several issues with this project, many of which involved delopment on Heroku.  To begin, being that this was a webscraper app I found out fairly quickly that Heroku was being blocked by many websites, which is the reason why BestBuy's price data does not display.  I tried to counter this issue by coming up with a very simple webscraping method not using any prebuild API solutions, despite that I was only able to get Microcenter and Exercom to function fully.  

Another issue I came across was hosting images on a Heroku app.  Expectedly, any image data you push to heroku is immediately lost, so I was not able to get a logo on the redirection buttons. 

