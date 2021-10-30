/* eslint-disable no-undef */
describe('Etape 1', function() {
    beforeEach(function() {
        cy.visit('/enigmes');
    });
    it('Test title Etape1',() => {
        cy.get('[data-testid=Title]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test p1 Etape1',() => {
        cy.get('[data-testid=p1]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test h2 Etape1',() => {
        cy.get('[data-testid=h2]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test enoncer Etape1',() => {
        cy.get('[data-testid=enoncer]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test ContentCard Etape1',() => {
        cy.get('[data-testid=ContentCard]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgba(0, 0, 0, 0.87)')
    })

    it('Test inputEtape1 Etape1',() => {
        cy.get('[data-testid=input]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgba(0, 0, 0, 0.87)')
    })
    
    it('Test SubmitEtape1 Etape1',() => {
        cy.get('[data-testid=Submit]')
        .should('be.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('Test NextStep Etape1',() => {
        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
        .should('have.css', 'color' , 'rgb(255, 255, 255)')
    })

    it('False answer Etape1',() => {
        cy
        .get("[data-testid=input]")
        .invoke('val', 'error')
        
        cy.get('[data-testid=Submit]')
        .click()
        

        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')

        cy.get('[data-testid=Submit]')
        .click()
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy
        .get("[data-testid=textError]")
        .should('be.visible')
    })

    it('Good answer Etape1',() => {
        cy
        .get("[data-testid=input]")
        .type('24,3')
        
        cy.get('[data-testid=Submit]')
        .click()
        
        cy
        .get("[data-testid=succes]")
        .should('be.visible')

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()

        cy.get('[data-testid=Title]')
        .should('be.visible')
    })
});