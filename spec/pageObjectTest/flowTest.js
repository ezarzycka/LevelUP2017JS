var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUsPage =require(pageObjectDir+"/contactUsPage.js");

var homePage = new HomePage();
var contactUsPage = new ContactUsPage();


describe('Protractor Demo App', function () {

    it('redirect to Contac Us page', function () {
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
        expect(contactUsPage.contactUsLabel.getText())
        .toEqual('CUSTOMER SERVICE - CONTACT US');

    });
    it('checking if dropdown list is displayed', function () {
        browser.get(contactUsPage.URL);
        expect(contactUsPage.subjectHedingDropdownList.isPresent()).toBe(true); 
    });
    it('check visibility of send button', function () {
        browser.get(contactUsPage.URL);
        expect(contactUsPage.sendButton.isPresent()).toBe(true); 
    }); 
});