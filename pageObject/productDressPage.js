
var ProductDressPage = function () {
    
        this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
        this.selectorPrice = element(By.css("#our_price_display"));
        this.selectorLabel = element(By.css(".pb-center-column > h1:nth-child(1)"));
    
    }

    
    module.exports = ProductDressPage;