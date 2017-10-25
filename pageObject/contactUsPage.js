var ContactUsPage = function(){
    
        this.URL = 'http://automationpractice.com/index.php?controller=contact';
        this.contactUsLabel = element(By.css(".page-heading"));
        this.subjectHedingDropdownList = element(By.css('#uniform-id_contact > span'));
        this.sendButton= element(By.css("div.submit"));
    
        
    
    }
    
    module.exports = ContactUsPage;