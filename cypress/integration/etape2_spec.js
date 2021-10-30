/* eslint-disable no-undef */
describe('Etapes 2:', function() {
    beforeEach(function() {
        cy.visit('/enigmes');
        
        cy.get("[data-testid=input]")
        .type('24,3')
            
        cy.get('[data-testid=Submit]')
        .click()

        cy.get('[data-testid=NextStep]')
        .should('be.visible')
        .click()
    });

    it('Test title Etape2',() => {
        cy.get('[data-testid=Title]')
        .should('be.visible')
    })

    it('Test p1 Etape2',() => {
        cy.get('[data-testid=p1]')
        .should('be.visible')
    })

    it('Test h2 Etape2',() => {
        cy.get('[data-testid=h2]')
        .should('be.visible')
    })

    it('Test enoncer Etape2',() => {
        cy.get('[data-testid=enoncer]')
        .should('be.visible')
    })

    it('Test ContentCard Etape2',() => {
        cy.get('[data-testid=ContentCard]')
        .should('be.visible')
    })

    it('Test inputEtape1 Etape2',() => {
        cy.get('[data-testid=input]')
        .should('be.visible')
    })
    
    it('Test SubmitEtape1 Etape2',() => {
        cy.get('[data-testid=Submit]')
        .should('be.visible')
    })

    it('Test NextStep Etape2',() => {
        cy.get('[data-testid=NextStep]')
        .should('be.not.visible')
    })

    it('False answer Etape2',() => {
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

    it('Good answer Etape2',() => {
        cy
        .get("[data-testid=input]")
        .type('pédagogie')
        
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
})