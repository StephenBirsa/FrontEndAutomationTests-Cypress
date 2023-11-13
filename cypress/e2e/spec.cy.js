describe('My First Test', () => {
  it('Validates the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})