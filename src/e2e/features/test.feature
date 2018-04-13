Feature: Testing BDD
  As an alpha dev
  I want to find out how cucumber BDD works
  To be able to use it in beta

  Scenario: Starting the app
    Given I load the app
    Then I should see the login screen

  Scenario: Clicking a button
    Given I am on the login page
    When I click a login button
    Then I successfully log in and see the journal page