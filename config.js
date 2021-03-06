var using=require('jasmine-data-provider');

// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
   
   // Capabilities to be passed to the webdriver instance.
    capabilities: {
    browserName: 'chrome'
    },
   


    frameworks: ['jasmine'],
   // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
   
   //specs: 'spec.js',

   suites:{
       jasmine: 'spec/jasmine/*.js',
       pageObject:'spec/pageObjectTest/*.js',
       dev: "spec/pageObjectTest/flowTest.js",
       task1:"spec/pageObjectTest/task1Test.js",
       js:"spec/javascript/zad1.js",
       task2:"spec/pageObjectTest/task2Test.js",

     
     
   },
   
   // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    },


    onPrepare:function(){
        global.using=using;
        browser.ignoreSynchronization = true;
        global.pageObjectDir = __dirname + "/pageObject";
        global.testDataDir=__dirname+"/testData";
        
        
    },

   
   };
   