Feature: sing-in

  Scenario: Successful Sing-in
    Given I am on the login screen
    When I login with correct details
    Then I am logged in

  Scenario: UnSuccessful Login
    Given I am on the login screen
    When I login with incorrect details
    Then I am not logged in



