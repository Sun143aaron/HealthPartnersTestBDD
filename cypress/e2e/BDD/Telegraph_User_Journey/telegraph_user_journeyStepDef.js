/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import * as element from '../../../support/fix-step/Nest/group-import';





Given(/^a user is on the telegraph website$/, () => {
	
	cy.getUrl()
    

});

When(/^the user confirms that they have landed on the correct website$/, () => {

	cy.url().should('contain','telegraph');

});

When(/^the user accepts the cookies$/, () => {

	cy.iframe(("div[id='sp_message_container_836835'] iframe")).then(($iframe) => {
    // Work with elements inside the iframe with the specified identifier
    cy.wrap($iframe).find(element.cookies).eq(1).click({force: true});

    });
	//cy.iframe() command targets the iframe using a CSS selector that matches the iframe with the specified identifier
    //The .then() function receives the selected iframe as an argument and allows you to perform actions within it
    //the callback function, cy.wrap($iframe) switches the Cypress context to the selected iframe, 
    //find() command searches for a button element with the specified title attribute inside the iframe
});

Then(/^the user selects the (.*) news tab from the given options on the website$/, () => {
	cy.wait(2000)
    cy.get('body').then(($div) => {

        if($div.find(element.offerPopup).length > 0){
         cy.get(element.offerPopup).click();
 
      } else{
         cy.log('No Offer Alert');
      }
   })
	cy.get(element.sportTab).contains('Sport').click();
        cy.title().then(title=>{
        cy.log('The title is + ', title);

    })
    cy.get('body').then(($div) => {

         if($div.find(element.offerPopup).length > 0){
          cy.get(element.offerPopup).click();
  
       } else{
          cy.log('No Offer Alert');
       }
    })
});
When(/^the user selects the (.*) and (.*) sport tab$/, (category,subcategory) => {



	cy.get(element.sportDropdown).click()
    cy.get(element.differentSportTab).contains(category) .click({force: true});
	cy.get('body').then(($div) => {

		if($div.find(element.offerPopup).length > 0 ) {
		 cy.get(element.offerPopup).click();
 
	  } else{
		 cy.log('No Offer Alert');
	  }
   })
	cy.get(element.subCategoryTab).contains(subcategory) .click({force: true});
});
Then(/^the user should be directed to a page displaying (.*) sports news$/, (category) => {

	
	cy.title().then(title=>{
    cy.log('The title is + ', title);
	})
	cy.title().should('contain',category)
 
});





