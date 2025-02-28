Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the Sign In link

  Scenario Outline: Login should be success
    And User enter the email-address as "<email>"
    And User enter the password as "<password>"
    When User click on the login button
    Then Login should be success and profile name "<profileName>" is displayed

    Examples:
      | email                                | password     | profileName |
      | customer@practicesoftwaretesting.com | welcome01    | Jane Doe    |
      | test@testmail.com                    | 123Atest.com | Test tested |

  Scenario: Login should not be success
    Given User enter the email-address as "customer@practicesoftwaretest.com"
    Given User enter the password as "Passtest"
    When User click on the login button
    But Login should fail and the text "My Account" not visible

