# DividendsWebscraper
a way to obtain dividends in google sheets through web scraping dividends.sg

https://www.quora.com/How-do-I-pull-a-stocks-dividend-data-namely-yield-or-annual-distribution-into-Google-Sheets 

As of 2017, GoogleFunction doesn’t have access to dividend data and there are no website accurately providing the dividend data for free. Outside of scrapping website information through script or other approaches, there are no other solutions than manual entry and research.

The reason for that is that you have to wait for corporations to declare the dividend which is done every quarter or based on the dividend schedule. There is an assumption that some companies will pay and have a fixed approach to it but you technically have to wait until the dividend is declared. Sometimes the dividend can be special or be regular which also needs to be accounted differently if you track dividend growth.

For example, the S&P500 dividend aristocrats index does not include the special dividend in their calculation for annual increases.

By using webscraping on dividends.sg, i can now get hold and track the amount of dividends collected when i sell the share, once again tracking my investments with ease by using getDividends("yyyy-mm-dd","C31") where the date is date of purchase. a more proper solution would take in a second date which is date of selling, which could be set to today if yet to sell.(note- change has been made, and it can do so now)
