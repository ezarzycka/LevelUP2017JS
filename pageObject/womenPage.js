var WomenPage = function(){
    
        this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
        this.womenLabel = element(By.css("#center_column > h1 > span.cat-name"));
        //this.topsLink = element(By.css(" #block_top_menu > ul > li:nth-child(1) > ul > li.sfHoverForce > a"));
        this.topMenuTops= element(By.css('.submenu-container.clearfix.first-in-line-xs >li:nth-of-type(1) >a.sf-with-ul'));
        this.topMenuTops2= element(By.css('div.block_content>ul.tree.dynamized>li:nth-child(1)>a:first-of-type'));
        //
    }


    WomenPage.prototype.goToTopsPage= function (){
        var that = this;
        this.topMenuTops2.click();


    } 


    module.exports = WomenPage;