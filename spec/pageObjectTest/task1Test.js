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
        homePage.goToWomenPage();
        expect(womenPage.womenLabel.getText())
            .toEqual('WOMEN ');
    });
    it('redirect to Tops page', function () {
        expect(womenPage.topMenuTops2.isDisplayed()).toBeTruthy();
        womenPage.goToTopsPage();
        expect(topsPage.topsLabel.getText())
            .toEqual('TOPS ');
    });
    it('redirect to Product page', function () {
        topsPage.goToProductPage();
        expect(productPage.isLabelLongerThan(8))
            .toBeTruthy();
        expect(productPage.conditionValue.getText())
            .toEqual("New");
    });
    it('adding to chart and checking if cart contains the product', function () {
        productPage.selectSizeM();
        productPage.addToShoppingCart();
        productPage.goToShoppingCart();
        expect(shoppingCartPage.productDescription.isDisplayed())
            .toBeTruthy();
        expect(shoppingCartPage.productQty.getAttribute('value'))
            .toEqual('1');

    });



});