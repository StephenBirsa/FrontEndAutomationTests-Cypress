//optional helper or function imports

export class AppPage1 {
    //elements

    loadWebsite() {
        cy.visit('webpages/application1/home_page.html');
    }

    validatePageElements() {
        cy.title().should('eq', 'Home Page');
    }
}
