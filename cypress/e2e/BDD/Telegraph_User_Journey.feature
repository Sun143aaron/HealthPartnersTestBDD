Feature: Sport Tab Functionality


Scenario Outline: Accessing different sports news through Sport Tab
    Given a user is on the telegraph website
    When the user confirms that they have landed on the correct website
    And the user accepts the cookies
    And the user selects the <Sport> news tab from the given options on the website
    When the user selects the <category> and <subcategory> sport tab
    Then the user should be directed to a page displaying <category> sports news    
    Examples:
        | category      |  subcategory       | 
        | Football      |  Football home     | 
        | Rugby Union   |  Rugby Union home  | 
        | Tennis        |  Tennis home       | 
        | Golf          |  Golf home         | 
        | Racing        |  Racing home       | 
        

