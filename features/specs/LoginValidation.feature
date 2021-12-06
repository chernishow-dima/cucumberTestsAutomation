Feature: Incorrect login validations

  Scenario Outline: Login page validations

    Given user open the login page
    When user enter credentials (username: <username>, password: <password>)
    Then validation message appears <message>

    Examples:
      | username | password              | message                                       |
      | user1    | password1             | Неверный логин или пароль, попробуйте заново. |
      | user2    | passowrd2             | Неверный логин или пароль, попробуйте заново. |
