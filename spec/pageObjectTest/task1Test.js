var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var TopsPage = require(pageObjectDir + "/topsPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");
var ShoppingCartPage = require(pageObjectDir + "/shoppingCartPage.js");

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var productPage = new ProductPage();
var shoppingCartPage = new ShoppingCartPage();



describe('Protractor Demo App', function () {

    it('redirect to Women page', function () {
        browser.get(homePage.URL);
        homePage.womenLink.click();
        expect(womenPage.womenLabel.getText())
            .toEqual('WOMEN ');
    });
    it('redirect to Tops page', function () {
        expect(womenPage.topMenuTops2.isDisplayed()).toBeTruthy();
        womenPage.topMenuTops2.click();
        expect(topsPage.topsLabel.getText())
            .toEqual('TOPS ');
    });
    it('redirect to Product page', function () {
        topsPage.productLink.click();
        expect(productPage.isLabelLongerThan(8)).toBeTruthy();
        expect(productPage.conditionValue.getText()).toEqual("New");
    });
    it('adding to chart and checking if cart contains the product', function () {
        productPage.sizeM.click();
        productPage.addToCartButton.click();
        productPage.cartLink.click();
        productPage.cartLink.click();
        expect(shoppingCartPage.productDescription.isDisplayed()).toBeTruthy();
        expect(shoppingCartPage.productQty.getAttribute('value')).toEqual('1');

    });



});