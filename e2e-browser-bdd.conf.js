exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    allScriptsTimeout: 11000,
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        './src/e2e/features/*.feature'
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ['./src/e2e/features/step_definitions/*.ts'],
    },

    baseUrl: 'http://localhost:8101/',

    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    }
}
