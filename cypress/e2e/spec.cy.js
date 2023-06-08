/// <reference types="Cypress" />



describe('Example to demonstrate commonly used JQuery commands', () => {
  
  
  
  
    it('Check if a buttonis disabled or enabled', function ()  {
        cy.visit('https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state')
        cy.get('button.btn.btn-lg.btn-primary').eq(2).then(($btn)=>{
            if ($btn.is(':disabled')) {
               cy.log('Button is disabled')
            }  else {
               cy.log('Button is enabled')
            }
        })
        cy.get('button.btn.btn-lg.btn-primary').eq(1).then (($btn)=>{
            if ($btn.is(':enabled')) {
               cy.log('Button is enabled')
            }  else {
               cy.log('Button is disabled')
            }
        })
      })

    it('Remove the disabled attributed and validate that button is enabled now', function () {
        cy.visit('https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state')
        cy.get('button.btn.btn-lg.btn-primary').eq(2).then(($btn)=>{
          cy.wrap($btn.removeAttr('disabled')).should.apply('be.enabled')
        })
     })
   
    it('Assert Inner Text', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('h2.title').eq(0).then(($ele)=>{
          cy.log($ele.text());
          expect($ele.text()).to.equal('New Windows')
        })
     
      })
     it('Assert Value', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('input#field1').eq(0).then(($ele)=>{
          cy.log($ele.val())
          expect($ele.val()).to.equal('Hello World!')
        })
      })
         
      it('Using filter with selector', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('.oxd-button').click()
        // cy.loginOrangeCRM('Admin', 'admin123')
        cy.get('.legendColorBox', { timeout: 7000 }).should('be.visible')
        cy.get('td').filter('.legendLabel').eq(1).should('have.text', 'Administration')
      })






})




