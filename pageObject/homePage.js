var HomePage = function(){

    this.URL = 'http://automationpractice.com/index.php';
    this.cartLabel = element(By.css(".shopping_cart"));
    this.contactUsLink = element(By.css("#contact-link > a"));
    this.womenLink = element(By.css("#block_top_menu > ul > li:nth-child(1) > a"));
    this.dressLink = element(By.css(".sf-menu > li:nth-child(2) > a:nth-child(1)"));
    

    HomePage.prototype.goToWomenPage= function (){
        var that = this;
        this.womenLink.click();
    } 


}

module.exports = HomePage;