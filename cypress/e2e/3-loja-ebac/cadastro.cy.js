/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
      });

      it('Deve completar o cadastro com sucesso ', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('Testando123!')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
      });
      
      it('Deve exibir uma mensagem de erro ao inserir um email já cadastrado', () => {
        cy.get('#reg_email').type('rodrigor.teste@testando.com.br', {delay: 150})
        cy.get('#reg_password').type('Testando123!')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail.')
      });

      it('Deve editar as informações do usuário cadastrado', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('Testando123!')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName(), {delay: 150})
        cy.get('#account_last_name').type(faker.person.lastName(), {delay: 150})
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
      });
      it('Deve editar as informações do usuário cadastrado - Usando variáveis', () => {
        var firstName = faker.person.firstName()
        var lastName = faker.person.lastName()
        var email = faker.internet.email(firstName)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('Testando123!')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName, {delay: 150})
        cy.get('#account_last_name').type(lastName, {delay: 150})
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
      });
});