var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    allScriptsTimeout: 11000,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    specs: ['./src/e2e/**/*.e2e-spec.ts'],
    baseUrl: 'http://localhost:8101/',

    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());

        browser.getCapabilities().then(function (capabilities) {
            browser.browserName = capabilities.get('browserName');
        });
    }
}
