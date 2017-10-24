var ContactUsPage = function(){
    
        this.URL = 'http://automationpractice.com/index.php?controller=contact';
        this.contactUsLabel = element(By.css(".page-heading"));

        this.subjectHeadingList =element(By.css("#id_contact"));
        
    

        this.sendButton= element(By.css("#submitMessage"));
    
        
    
    }
    
    module.exports = ContactUsPage;