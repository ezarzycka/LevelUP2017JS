var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUsPage =require(pageObjectDir+"/contactUsPage.js");

var homePage = new HomePage();
var contactUsPage = new ContactUsPage();


describe('Protractor Demo App', function () {

    it('should have a title', function () {
     browser.waitForAngularEnable(false);
        browser.get(homePage.URL);
        homePage.contactUsLink.click();

        

        // expect(homePage.cartLabel.getText())
        //     .toEqual('Cart (empty)');


    });
    it('should have a title', function () {
        
        contactUsPage.contactUsLabel.getText()
   
           expect(contactUsPage.contactUsLabel.getText())
               .toEqual('CUSTOMER SERVICE - CONTACT US');
   
   
       });
});