/// <reference types="cypress" />

context('Window', () => {
  describe('Hello World Testing Webpage', () => {
    it('Type Hello World in Google Page', () => {
      cy.visit('https://www.google.com.au/')
      cy.title().should('eq', 'Google')
      cy.get('[title="Search"]').type("Hello, World!");
      cy.get('[jsmodel="hspDDf"]').click();
    })
  });
});
