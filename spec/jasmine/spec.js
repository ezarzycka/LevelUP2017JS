beforeAll(function(){

});




describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        // element(By.css('.logo > a:nth-child(1)')).getText

        //expect(element(By.css('.logo > a:nth-child(1)')).getText()).toEqual('SHOP');

    

        expect(browser.findElement(By.css('.shopping_cart'))
            .getText())
            .toEqual('Cart (empty)');



    });
});




