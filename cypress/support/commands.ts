/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => { 
  cy.visit("/")
  // Break chain to avoid detached DOM issues from React re-render
  cy.get('input[name="q"]').as('searchInput')
  cy.get('@searchInput').type(query)
  cy.get('form').submit()
 })
