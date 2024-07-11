/// <reference types="cypress" />

describe('Funcionalidade: Login', () =>{
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
      })
      //afterEach(() => {
      //  cy.screenshot()
     // })
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('rodrigor.teste@testando.com.br')
        cy.get('#password').type('Testando123!')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rodrigor.teste (não é rodrigor.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('rodrigor1.teste@testando.com.br')
        cy.get('#password').type('Testando123!')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('rodrigor.teste@testando.com.br', {delay: 100})
        cy.get('#password').type('Testando1234!')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail rodrigor.teste@testando.com.br está incorreta.')
        cy.get('.woocommerce-error > li').should('exist')
    });
})