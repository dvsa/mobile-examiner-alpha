var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// Find the path to the app (there will be a better way than this)
var path = __dirname;
var pathBits = path.split('/');
//pathBits.pop();
// pathBits.pop();
// pathBits.pop();
var appPath = pathBits.join('/') + '/platforms/ios/build/emulator/App.app';

exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    allScriptsTimeout: 11000,
    // directConnect: true,
    // capabilities: {
    //     'browserName': 'chrome'
    // },
    capabilities: {
        //'appium-version': '1.5.3',
        platformName: 'iOS',
        platformVersion: '11.2',
        deviceName: 'iPad Pro (10.5-inch)',
        browserName: "",
        autoWebview: true,
        //fullReset: true,
        app: appPath,
        automationName: "XCUITest"
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    specs: ['./src/e2e/**/*.e2e-spec.ts'],
    //baseUrl: 'http://localhost:8100',
    baseUrl: '',
    useAllAngular2AppRoots: true,
    beforeLaunch: function() {
 
        require('ts-node').register({
            project: 'e2e'
        });
 
        //require('connect')().use(require('serve-static')('www')).listen(8100);
 
    },
    // onPrepare: function() {
    //     jasmine.getEnv().addReporter(new SpecReporter());
    // }


    onPrepare: function () {

        jasmine.getEnv().addReporter(new SpecReporter());

        var wd = require('wd'),
          protractor = require('protractor'),
          wdBridge = require('wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);
    
        browser.getCapabilities().then(function (capabilities) {
          browser.browserName = capabilities.get('browserName');
        });
      }

}

// var appLocation = '/Users/daniel.childs/Documents/dev/sandbox/testing/myapp/platforms/ios/build/emulator/myapp.app';
 
// exports.config = {
//     seleniumAddress: 'http://localhost:4723/wd/hub',
 
//     // specs: [
//     //     'features/*.feature'
//     // ],
 
//     // framework: 'custom',
//     // frameworkPath: require.resolve('protractor-cucumber-framework'),
//     // cucumberOpts: {
//     //     require: ['features/step_definitions/login_page_steps.js', 'features/support/*.js'],
//     //     //format: ['pretty']
//     //     //,tags: '@dev'
//     // },
 
//     // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
 
//     capabilities: {
//         //'appium-version': '1.5.3',
//         platformName: 'iOS',
//         platformVersion: '11.2',
//         deviceName: 'iPad Pro (10.5-inch)',
//         browserName: "",
//         autoWebview: true,
//         //fullReset: true,
//         app: appLocation,
//         automationName: "XCUITest"
//     },
//     //baseUrl: 'http://10.0.2.2:8000',
//     baseUrl: '',
 
//     // configuring wd in onPrepare
//     // wdBridge helps to bridge wd driver with other selenium clients
//     // See https://github.com/sebv/wd-bridge/blob/master/README.md
//     // onPrepare: function () {
//     //     var wd = require('wd'),
//     //         protractor = require('protractor'),
//     //         wdBridge = require('wd-bridge')(protractor, wd);
 
//     //     wdBridge.initFromProtractor(exports.config);
 
//     //     //To navigate using file:// rather than http://
//     //     var defer = protractor.promise.defer();
 
//     //     browser.ignoreSynchronization = true;
 
//     //     browser.executeScript('return window.location;').then( function(location){
//     //         browser.resetUrl = 'file://';
//     //         browser.baseUrl = location.origin + location.pathname;
//     //         defer.fulfill();
//     //     });
 
//     //     return defer.promise;
//     // }
// };