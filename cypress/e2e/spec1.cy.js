/// <reference types="cypress-iframe" />
import 'cypress-iframe';


describe('test',()=> {
   
it('e2e',()=>{
        cy.visit('https://www.telegraph.co.uk/');
        cy.url().should('contain','telegraph');
    
         cy.iframe("div[id='sp_message_container_784380'] iframe").then(($iframe) => {
        // // Work with elements inside the iframe with the specified identifier
         cy.wrap($iframe).find("button[title='Accept']").eq(1).click({force: true});

      });
      cy.get('span[class="e-navigation-primary-item__link-content"]').contains('Sport').click();
      cy.title().then(title=>{
        cy.log('The title is + ', title);

      })
      cy.get('body').then(($div) => {

        if($div.find('svg[class="martech-modal-component__close-icon"]').length > 0){
          cy.get('svg[class="martech-modal-component__close-icon"]').click();
  
       } else{
          cy.log('No Offer Alert');
       }
      })
      cy.wait(2000)
      cy.get('.accordion__trigger').click({force: true})
      cy.get('.e-navigation-secondary-item__link-text').eq(4).click({force: true});

      cy.title().then(title=>{
        cy.log('The title is + ', title);

      })
      cy.title().should('include',"Women's Sport");

      //.hero-asset__title


})

})
