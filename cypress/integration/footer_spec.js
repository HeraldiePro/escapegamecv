/* eslint-disable no-undef */
describe('Footer:', function() {
    // Step 1: setup the application state
    beforeEach(function() {
      cy.visit('/');
    });
    it('Test contain footer exist',() => {
        cy.get('[data-testid=ContainerFooter]')
        .should('be.visible')
    })

    it('Test footer exist',() => {
        cy.get('[data-testid=TextFooter]')
        .should('be.visible')
    })

    it('Test footer is © Site appartenant a doubi',() => {
        cy.get('[data-testid=TextFooter]')
        .should('be.visible')
        .should('have.text', '© Site appartenant a doubi')
    })
});