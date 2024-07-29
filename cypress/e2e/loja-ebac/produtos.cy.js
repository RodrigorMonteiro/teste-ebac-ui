/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () =>{
    beforeEach(() => {
        produtosPage.visitarUrl()
      })
      it('Deve selecionar um produto da lista', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProdutoLista(produto)
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
      it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
      });
      it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
      });
      it('Deve adicionar produto ao carrinho', () => {
        let qtd = 8
        produtosPage.buscarProduto('Autumn Pullie')
        produtosPage.addProdutoCarrinho('S', 'Purple', qtd)
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
      });
      it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[1].nomeProduto, 0)
        produtosPage.addProdutoCarrinho(
          dados[1].tamanho, 
          dados[1].cor, 
          dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
        
      });

})