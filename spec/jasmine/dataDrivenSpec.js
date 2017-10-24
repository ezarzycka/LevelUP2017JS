var data= {

    "contact us" : {
        'cssSelector' : "#contact-link > a",
        "value" : "Contact us"
    },
    "shop" : {
        'cssSelector' : ".shopping_cart",
        "value" : "Cart (empty)"
    },



}
    
    
using(data, function(element){
    describe('Protractor Demo App element', function () {
        it('should have a title', function () {
            browser.waitForAngularEnabled(false);
            browser.get('http://automationpractice.com/index.php');
            // element(By.css('.logo > a:nth-child(1)')).getText
    
            //expect(element(By.css('.logo > a:nth-child(1)')).getText()).toEqual('SHOP');
    
        
    
            expect(browser.findElement(By.css(element.cssSelector))
                .getText())
                .toEqual(element.value);
    
    
    
        });
 
 
    });

});