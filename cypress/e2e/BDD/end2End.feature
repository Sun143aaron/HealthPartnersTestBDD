Feature: Add and Remove Product to Shopping Basket

    Scenario Outline: Adding and Removing Products into Cart
        Given user navigates to the Prestashop website
        When  user verifies that they are on the correct website
        Then  user check the length and default products of the home slider
        And   user confirms size, length, and default display of popular product
        When  user searches for a <product> product
        And   user verifies the short description of the displayed product
        And   user adds the product to the cart
        Then  user should see a message "There is 1 item in cart" displayed on the screen
        When  user clicks on the "Proceed to checkout" button
        And   user opens the cart and removes the item from the cart
        Then  user should see an alert message displayed on the Cart Summary page.
        Examples:
            | product                     |
            | blouse                      |
            | Chiffon Dress               |
            | Faded Short Sleeves T-shirt |