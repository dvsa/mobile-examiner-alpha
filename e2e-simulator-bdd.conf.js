var appPath = __dirname + '/platforms/ios/build/emulator/Mobile Examiner Alpha.app';

exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  allScriptsTimeout: 11000,
  capabilities: {
    platformName: 'iOS',
    platformVersion: '12.0',
    deviceName: 'iPad Pro (10.5-inch)',
    browserName: '',
    autoWebview: true,
    //fullReset: true,
    app: appPath,
    automationName: 'XCUITest',
    isHeadless: true
  },
  specs: ['./src/e2e/features/*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    format: 'json:./test_reports/cucumber_report.json',
    require: ['./src/e2e/features/step_definitions/*.ts']
  },
  baseUrl: '',
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });

    var fs = require('fs');
    var dir = './test_reports';

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
};
