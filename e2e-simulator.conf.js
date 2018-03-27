var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var appPath = __dirname + '/platforms/ios/build/emulator/App.app';

exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    allScriptsTimeout: 11000,
    capabilities: {
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
    baseUrl: '',
    useAllAngular2AppRoots: true,
    beforeLaunch: function() {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {

        jasmine.getEnv().addReporter(new SpecReporter());

        // var wd = require('wd'),
        //   protractor = require('protractor'),
        //   wdBridge = require('wd-bridge')(protractor, wd);
        // wdBridge.initFromProtractor(exports.config);
    
        // browser.getCapabilities().then(function (capabilities) {
        //   browser.browserName = capabilities.get('browserName');
        // });
      }

}
