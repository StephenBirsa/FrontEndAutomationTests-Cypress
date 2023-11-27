//optional helper or function imports

export class AppPage1 {
    //elements

    loadWebsite() {
        cy.visit('webpages/application1/home_page.html');
    }

    validatePageElements() {
        cy.title().should('eq', 'Home Page');
        cy.get('[data-cy=red]').click();
        cy.get('[data-cy=green]').click();
        cy.get('[data-cy=blue]').click();
        cy.get('[data-cy=purple]').click();
        cy.get('[data-cy=black]').click();
    }
}
