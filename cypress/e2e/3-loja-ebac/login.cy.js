/// <reference types="cypress" />
const perfil = require("../../fixtures/perfil.json")

describe('Funcionalidade: Login', () =>{
    beforeEach(() => {
        cy.visit ('minha-conta')
      })
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
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('rodrigor.teste@testando.com.br', {delay: 100})
        cy.get('#password').type('Testando1234!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rodrigor.teste (não é rodrigor.teste? Sair)')
    });
    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rodrigor.teste (não é rodrigor.teste? Sair)')

        })    
    });
})