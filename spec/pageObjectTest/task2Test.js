var HomePage = require(pageObjectDir + "/homePage.js");
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var ProductDressPage = require(pageObjectDir + "/productDressPage.js");
var homePage = new HomePage();
var dressesPage = new DressesPage();
var productDressPage = new ProductDressPage();

var data = {
    "dress1": {
        'selectorToClick': "dressLink1",
        "price": "$26.00",
        "label": "Printed Dress"
    },
    "dress2": {
        'selectorToClick': "dressLink2",
        "price": "$50.99",
        "label": "Printed Dress"
    },
    "dress3": {
        'selectorToClick': "dressLink3",
        "price": "$28.98",
        "label": "Printed Summer Dress"
    },
    "dress4": {
        'selectorToClick': "dressLink4",
        "price": "$30.50",
        "label": "Printed Summer Dress"
    },
    "dress5": {
        'selectorToClick': "dressLink5",
        "price": "$16.40",
        "label": "Printed Chiffon Dress"
    }
};

beforeAll(function () {
    browser.get(homePage.URL);
})

beforeEach(function(){  
    homePage.dressLink.click();
})

describe('Protractor Demo App', function () {
    it('is Dresses load', function () {
        expect(dressesPage.dressesLabel.getText()).toEqual('DRESSES ');
    })

    using(data, function (dress) {
        it('check price', function () {
            dressesPage[dress.selectorToClick].click();
           //console.log(productDressPage.selectorPrice.getText()); //----> console wymaga opakowania w promise
            expect(productDressPage.selectorPrice.getText()).toEqual(dress.price);
        });
        it('check label', function () {
            dressesPage[dress.selectorToClick].click();
            expect(productDressPage.selectorLabel.getText()).toEqual(dress.label);
        });
    });
    
});