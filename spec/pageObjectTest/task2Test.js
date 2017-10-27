var HomePage = require(pageObjectDir + "/homePage.js");
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var ProductDressPage = require(pageObjectDir + "/productDressPage.js");
var data = require(testDataDir + "/data.js");
var homePage = new HomePage();
var dressesPage = new DressesPage();
var productDressPage = new ProductDressPage();



beforeAll(function () {
    browser.get(homePage.URL);
})

beforeEach(function(){  
    
})

describe('Protractor Demo App', function () {
    it('is Dresses load', function () {
        homePage.dressLink.click();
        expect(dressesPage.dressesLabel.getText()).toEqual('DRESSES ');
    })

    using(data, function (dress) {
        it('check price', function () {
            dressesPage[dress.selectorToClick].click();
           //console.log(productDressPage.selectorPrice.getText()); //----> console wymaga  promise
            expect(productDressPage.selectorPrice.getText()).toEqual(dress.price);

        });
        it('check label', function () {
            expect(productDressPage.selectorLabel.getText()).toEqual(dress.label);
            browser.navigate().back();
        });
    });
    
});