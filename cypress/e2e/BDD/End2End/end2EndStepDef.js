/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import * as elements from '../../../support/step_definition/keyword/maping-importer';


Given(/^user navigates to the Prestashop website$/, () => {

	cy.goToURL()
});

When(/^user verifies that they are on the correct website$/, () => {

	cy.url().should('contain', 'ryviushop')

	// getting title print form dom
	cy.title().then(title => {
	  cy.log(' The Page Title is ' + title)
	})
	// asserting title actual vs expected
	cy.title().should('include', 'Ryviu Shop - Product reviews app' )

});

Then(/^user check the length and default products of the home slider$/, () => {
	
	cy.get(elements.homepageSliderDefault).should('contain.text', 'Product review app');
    cy.wait(3400);
	cy.get(elements.homepageSlider2).should('contain.text', 'EXCEPTEUR');
	// asserting length of homeslider
	cy.get(elements.homepageSliderLength).then(($el) => {
        const homepageSlidercount = Cypress.$($el).length
        expect(homepageSlidercount).to.equal(3)
    })
}); 

Then(/^user confirms size, length, and default display of popular product$/, () => {

	cy.get(elements.popularTab).should('have.text', 'Popular');
    cy.wait(1200)

    // printing name of popular products from dom
	cy.get(elements.pupularProductList).find(elements.productName).each(($ele) => {
      
        cy.log($ele.text());

    })
    cy.get(elements.pupularProductList2)
    .find(elements.productName2)
    .its('length')
    .then((count) => {
    cy.log('Total count for Popular product is ' + count)
    expect(count).to.equal(7)
    })


}); 

When(/^user searches for a (.*) product$/, (product) => {

	cy.get(elements.searchBox).type(product)
    cy.get(elements.searchResult).click()

});

When(/^user verifies the short description of the displayed product$/, () => {

	cy.get(elements.productDescription).should('be.visible')
    cy.get(1500)
    // Printing short description of
	cy.get(elements.productDescription).each(($ele) => {
      
        cy.log($ele.text());
  
      })

});

When(/^user adds the product to the cart$/, () => {

	cy.get(elements.add_To_Cart).click()

});

Then(/^user should see a message "([^"]*)" displayed on the screen$/, () => {

	//removing expression /\n/g which matches all newline characters in the string and replaces them with an empty string ''
    cy.get(elements.assert_Cart_Text).then(($el) => {
		const text = $el.text();
		const cleanText = text.trim();
		expect($el.text().trim()).to.eq('There are 1 items in your cart.');
       // expect(cleanText.includes('There are 1 items in your cart.')).to.be.true;	  
	});
	  		  
});



When(/^user clicks on the "([^"]*)" button$/, () => {

	cy.get(elements.checkout_Button).eq(2).click()
	
});

When(/^user opens the cart and removes the item from the cart$/, () => {
	
	cy.get(elements.open_Cart).click() 
    
    cy.get(elements.delete_Order).click() 

});

Then(/^user should see an alert message displayed on the Cart Summary page.$/, () => {
	
	cy.get(elements.cart_Summary).should('contain.text','Your shopping cart is empty.' )


	

});
