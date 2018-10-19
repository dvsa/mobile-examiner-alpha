import { browser, WebDriver, element, by } from 'protractor';

const { Given, Then, When, setDefaultTimeout, After, Status } = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

setDefaultTimeout(10 * 1000);

Given('I am a mobile app user', function() {
  // Some sort of authentication setup
});

When('I launch the mobile app', function() {
  return browser.get('');
});

Then('I should see the login screen', function() {
  browser.sleep(2000);

  return expect(
    element
      .all(by.css('ion-navbar:first-child'))
      .first()
      .getText()
  ).to.eventually.equal('DVSA');
});

Given('I am on the login page', function() {
  return browser.get('');
});

When('I click a login button', function() {
  var loginButton = element(by.id('loginButton'));
  return loginButton.click();
});

Then('I successfully log in and see the journal page', function() {
  browser.sleep(2000);

  return expect(
    element
      .all(by.css('span.mes-header-md'))
      .first()
      .getText()
  ).to.eventually.equal('Your Journal');
});

After(function(testCase) {
  var world = this;
  if (testCase.result.status === Status.FAILED) {
    return browser.takeScreenshot().then(function(screenShot) {
      // screenShot is a base-64 encoded PNG
      world.attach(screenShot, 'image/png');
    });
  }
});
