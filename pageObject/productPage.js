var ProductPage = function () {

    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    this.productDescription = element(By.css("#short_description_content > p"));
    this.conditionValue = element(By.css("#product_condition > span"));
    this.sizeM = element(By.css("#group_1 > option:nth-child(2)"));
    this.addToCartButton = element(By.css(" #add_to_cart > button > span"));
    this.popUpText= element(By.css("#layer_cart > div.clearfix"));
    this.cartLink = element(By.css("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b"));

}



ProductPage.prototype.selectSizeM= function (){
    var that = this;
    this.sizeM.click();
} 

ProductPage.prototype.addToShoppingCart= function (){
    var that = this;
    this.addToCartButton.click();
}


ProductPage.prototype.goToShoppingCart= function (){
    var that = this;
    this.cartLink.click();
    this.cartLink.click();
}



ProductPage.prototype.isLabelLongerThan = function (isLongerThan) {
    var that=this;
    return new Promise(function (resolve) {
        that.productDescription.getText().then(function (text) {
            var isLonger = text.length > isLongerThan;
            resolve(isLonger);
            //resolve(isLongerThan);
        })
    });
}

module.exports = ProductPage;