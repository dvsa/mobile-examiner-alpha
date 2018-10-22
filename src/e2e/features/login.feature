Feature: Login

   Scenario: Viewing login page
    Given I am a mobile app user 
    When I launch the mobile app
    Then I should see the login screen
    
   Scenario: User logs in to MES
    Given I am on the login page
    When I click a login button
    Then I successfully log in and see the journal page

