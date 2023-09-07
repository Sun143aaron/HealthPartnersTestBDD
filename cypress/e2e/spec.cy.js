

describe('test',()=>{

it('e2e', ()=> {

    cy.visit('https://www.telegraph.co.uk/')

    cy.url().contains('telegtaph');
    
    cy.visit('div[class="site-header__primary-wrapper"]').should('be.visible');

    cy.get('a[class="e-navigation-primary-item__link"]').eq(1).click({force:true});
    cy.url().contains('news');





}) 

})
