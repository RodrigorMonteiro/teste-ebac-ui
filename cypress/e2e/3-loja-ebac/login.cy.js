/// <reference types="cypress" />

describe('Funcionalidade: Login', () =>{
    it('Deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('rodrigor.teste@testando.com.br')
        cy.get('#password').type('Testando123!')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rodrigor.teste (não é rodrigor.teste? Sair)')
    })
})