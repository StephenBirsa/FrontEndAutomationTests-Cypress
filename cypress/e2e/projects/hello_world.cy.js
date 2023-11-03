/// <reference types="cypress" />

describe('Hello World Test', () => {
  it('Type Hello World in Google Page', () => {
    cy.visit('https://www.google.com.au/')
    cy.title().should('eq', 'Google')
    cy.get('[title="Search"]').type("Hello, World!").blur();
  })
});
