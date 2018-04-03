import { browser, element, by } from 'protractor';
 
describe('Example E2E Test', () => {
 
  beforeEach(() => {
    browser.get('');
  });
 
  it('the login page is displayed by default', () => {

    expect(element(by.css('ion-navbar:first-child'))
        .getAttribute('innerHTML'))
        .toContain('Login'); 
  });
 
  it('the user can click login and go to the next page', () => {
 
    element(by.id('loginButton'))
        .click();

    browser.sleep(2000);
    

    expect(element.all(by.css('ion-navbar:first-child')).first()
        .getAttribute('innerHTML'))
        .toContain('Dashboard'); 
  });
 
});