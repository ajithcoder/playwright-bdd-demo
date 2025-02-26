Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the Sign In link

  Scenario: Login should be success
    And User enter the email-address as "customer@practicesoftwaretesting.com"
    And User enter the password as "welcome01"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the email-address as "customer@practicesoftwaretest.com"
    Given User enter the password as "Passtest"
    When User click on the login button
    But Login should fail