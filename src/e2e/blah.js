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
    automationName: "XCUITest",
    autoWebview: false
  }
};

const client = wdio.remote(opts);
client.init().waitForVisible("~danTest2").click("~danTest2").end();

// browser = wdio.promiseChainRemote(appiumServer);
// browser
//   .init(opts)
//   .then(function() { done(); });


// console.log(appPath);


// //let contexts = wdio.contexts().then((c) => wdio.context(contexts[c[1]]));


// const client = wdio.remote(opts);
// client
//   .init()
//   .contexts().then((contexts) => client.context(contexts[1]))
//   .click("~danTest2");

//c2.click("~danTest2");


//client.context()

//var c = client.contexts().then((c) => client.context(c[1]));
//c.init().click("~danTest2");

//client.init().click("~danTest2");

// const h = client.init().contexts();
// h.then((h) => client.context[h[0]]);
// h.then(console.log);
//console.log(h[1]);


//client.init().click("danTest3");


//client.init().elementIdClick("danTest3");
//client.init().click("#danTest3");

// const el = client.init().element("~danTest2");

//client.touchAction()

// client
//   .init()
//   .click("#danTest3")
//   .end();

//console.log(el);

// client
//   .init()
//   .touchPerform([{
//       action: 'press',
//       options: {
//           x: el.location.x,
//           y: el.location.y
//       }
//   }]);




// client.init();
// client.click("~danTest2");

// const el = client.element("~danTest2");
// console.log(el);

// el.touch();





//el.location.x;

//client.touchAction()

// client
//   .init()
//   .click("~danTest2");
  //.touch("//label[contains(text(),'Log in')]");

// client
//   .init()
//   .element('//*[@label=\"Log in\"]')
//   .click();

  //.element("//[name='Log in']")
  //.element("//label[contains(text(),'Log in')]")
  //.click("~danTest2");
  //.click("~danTest");
  //.elementIdElement('danTest')
  //.click();
  //.click("//elementIdText('danTest')");
  //.elementIdValue("danTest").click();
  //.elementIdText('Login Test')
  //.click()

  //.end();