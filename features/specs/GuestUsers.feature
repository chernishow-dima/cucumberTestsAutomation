Feature: Only authorized users required

  Scenario Outline: Login as guest unavailable

    Given user open the login page
    When click login as guest button
    Then login page is displayed