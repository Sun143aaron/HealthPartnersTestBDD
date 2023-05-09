Feature: Sing In 

    Scenario Outline: User can register successfully
        Given user navigates to the Presposhop website
        When  user click on Sign in tab
        Then  user can see Authentication page appear
        And   user enter <email> id under 'create an account' and select create
        And   user navigaets to personal information page and verify auto field <email> id section
        And   user filled up all personal detail
        Then  user sign up for newslatter select register button
        Examples:
            | email                     |
            | sunbaria02@gmail.com      |
            | sunmoon@yahoo.co.uk       |
            