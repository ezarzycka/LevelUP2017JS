var ShoppingCartPage = function(){
    
    this.cartLabel = element(By.css("#cart_title"));
    this.productDescription = element(By.css("#product_1_3_0_0 > td.cart_description > p"));
    this.productQty = element(By.css(".cart_quantity_input"));
    
    
    
    
    }
    
    module.exports = ShoppingCartPage;