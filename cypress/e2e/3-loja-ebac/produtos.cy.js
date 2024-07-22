/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () =>{
    beforeEach(() => {
        cy.visit ('produtos')
      })
      it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .eq(2)
            .click()
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
      });
      it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block')
            .first() 
            .click()
            cy.get('.woocommerce-product-details__short-description > p').should('contain', 'Abominable Hoodie')
      });
      it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block')
            .last() 
            .click()
            cy.get('.woocommerce-product-details__short-description > p').should('contain', 'Atlas Fitness Tank')
      });
})