var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var appPath = __dirname + '/platforms/ios/build/device/App.ipa';

exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    allScriptsTimeout: 11000,
    capabilities: {
        platformName: 'iOS',
        platformVersion: '11.1',
        browserName: "",
        autoWebview: true,
        //fullReset: true,
        autoWebviewTimeout: 10000,
        app: appPath,
        automationName: "XCUITest",
        deviceName: 'DE’s iPad',
        udid: '', // Your device ID
        bundleId: 'uk.gov.dvsa.mobile-examiner', // Change to your bundle ID
        xcodeOrgId: "", // Change to your app developer ID
        xCodeSigningId: "" // Change to your signing name
    },

    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    specs: ['./src/e2e/**/*.e2e-spec.ts'],
    baseUrl: '',
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}
