/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import * as elements from '../../../support/step_definition/keyword/maping-importer';

let firstname = 'Sunil'
let lastname = 'Baria'
let password = 'Password1234'




Given(/^user navigates to the Presposhop website$/, () => {

	cy.goToURL()

});

When(/^user click on Sign in tab$/, () => {

	cy.get(elements.Sign_In).click()

	cy.title().then(title => {
		cy.log(title)

	})
	cy.title().should('include','Login')

});

Then(/^user can see Authentication page appear$/, () => {
	
	cy.get(elements.Authentication).should('have.text', 'Authentication')
});

Then(/^user enter (.*) id under 'create an account' and select create$/, (email) => {
	
	cy.get(elements.Email).type(email)
	cy.get(elements.Create_Button).click()
});


Then(/^user navigaets to personal information page and verify auto field (.*) id section$/, (email) => {

	cy.get(elements.Email_Field).should('have.value', email)
});

Then(/^user filled up all personal detail$/, () => {

	cy.get(elements.Gender_Mr).click()
	cy.get(elements.First_Name).type(firstname)
	cy.get(elements.Last_Name).type(lastname)
	cy.get(elements.Password).type(password)
	cy.get(elements.Day).select('2')
    cy.get(elements.Month).select('December')
	cy.get(elements.Year).select('2001')
    
	
});

Then(/^user sign up for newslatter select register button$/, () => {

	cy.get(elements.Checkbox).click()
});

