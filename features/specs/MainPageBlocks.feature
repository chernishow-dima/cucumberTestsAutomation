Feature: Main page sections

  Scenario Outline: All sections are displayed on main page

    Given user open the main page
    When user enter credentials (username: <user>, password: <password>) on main page
    Then login page is displayed

    Examples:
      | user     | password  |
      | user1    | password1 |
      | user2    | passowrd2 |

  Scenario Outline: All blocks are displayed

    Given user open the main page
    Then all main page blocks are displayed