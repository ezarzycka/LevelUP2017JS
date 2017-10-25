
var TopsPage = function(){
    
        this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
        this.topsLabel= element(By.css("#center_column > h1 > span.cat-name"));
        this.productLink= element(By.css("li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(1)"));
    
    
     
    
    }
    
    module.exports = TopsPage;