/// <reference types="cypress" />

describe('Hello World Test', () => {
  it('Type Hello World in Google Page', () => {
    cy.visit('webpages/hello_world.html');
    cy.title().should('eq', 'Hello World');
    cy.get('[data-test="searchbar"]').type("Hello, World!").blur();
  })
});
