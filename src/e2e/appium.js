const wdio = require('webdriverio');

// Find the path to the app (there will be a better way than this)
var path = __dirname;
var pathBits = path.split('/');
pathBits.pop();
pathBits.pop();
var appPath = pathBits.join('/') + '/platforms/ios/build/emulator/App.app';

// Set up appium
const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "iOS",
    platformVersion: "11.2",
    deviceName: "iPad Pro (10.5-inch)",
    app: appPath,
    automationName: "XCUITest"
  }
};


console.log(appPath);

const client = wdio.remote(opts);

client
  .init()
  //.elementIdText('Login Test')
  //.click()

  //.end();